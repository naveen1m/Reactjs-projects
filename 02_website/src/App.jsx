
import React from 'react';
import './App.css';
import Banner from './components/Banner';
import Header from './components/Header';
import Learn from './components/Learn';

function App() {
  return (
    <div className='bg-[#F5F4F6]'>
      <Header />
      <Banner />
      <Learn />
    </div>
  );
}

export default App;
