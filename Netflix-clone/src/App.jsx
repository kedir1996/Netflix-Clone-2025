import './App.css';
import React from 'react';
import Banner from './Componets/banner/banner.jsx';
import Header from './Header/header.jsx';
import './Header/header.css';
import Footer from './Footer/footer.jsx';
import './Footer/footer.css';

function App() {
  return (
    <div>
      <Header />
      <Banner/>
      <Footer />
    </div>
  );
}

export default App;
