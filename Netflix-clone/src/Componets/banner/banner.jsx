import React, { useState, useEffect } from 'react';
import axios from '../../utils/axios';
import requests from '../../utils/request';
import './Banner.css';

const Banner = () => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(requests.fetchNetflixOriginals);
        const results = response?.data?.results;

        if (results.length > 0) {
          const randomMovie = results[Math.floor(Math.random() * results.length)];
          setMovie(randomMovie);
        }
      } catch (error) {
        console.error('Error fetching banner movie:', error);
      }
    }

    fetchData();
  }, []);

  const truncate = (str, n) => {
    return str?.length > n ? str.substring(0, n - 1) + '...' : str;
  };
  if (!movie) {
    return <div className="banner__loading">Loading banner...</div>;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movie.backdrop_path}')`,
        backgroundPosition: 'center center',
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie.title || movie.name || movie.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(movie.overview, 150)}
        </h1>
      </div>
      <div className="banner__fadeBottom" />
    </header>
  );
};

export default Banner;
