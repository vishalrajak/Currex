import React from 'react';
import Header from './components/header'
import Footer from './components/footer'


import './App.css';
import Search from './components/search';

function App() {
  return (
    <div className="App" style={{display:'flex',minHeight:'100vh',flexDirection:'column',justifyContent:'start'}}>
      <Header/>
      <Search />
      <Footer/>
    </div>
  );
}

export default App;
