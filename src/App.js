import './App.css';
import React from 'react';
import Header from './component/Header';
import About from './component/About';
import Team from './component/Team';
import Partenaire from './component/Partenaire';
import Events from './component/Events';
import Footer from './component/Footer';
import CountDown from './component/CountDown';
import Count from './component/Count';

function App() {
  setInterval(Count, 1000);
  return (
    <React.Fragment >
      <Header/>
      <About/>
      <Team/>
      <Partenaire/>
      <Events/>
      <CountDown/>
      <Footer/>
    </React.Fragment>

  );
}

export default App;
