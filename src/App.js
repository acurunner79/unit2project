// import logo from './logo.svg';
import React from 'react'
import './App.css';
import About from './components/About'
import HeroDisplay from './SuperheroData/HeroDisplay'
import HeroSearch from './SuperheroData/HeroSearch'
import SuperheroData from './SuperheroData/index'
import { Route } from "react-router-dom"
import Nav from './components/Nav'
import Footer from './components/Footer'

function App() {
  const [hero, setHero] = React.useState(null)
  const herosearch = (myHero) => {
     setHero(myHero)
  }

  return (
    
    <div className="App">
      <Nav />
      <Route path="/about">
        <About />
      </Route>
      <Route path="/hero-display">
        <HeroDisplay hero={hero}/>
      </Route>
      <Route path="/hero-search" render={(routerProps) => <HeroSearch {...routerProps} herosearch={herosearch}/>} />
      <Route exact path="/">
        <SuperheroData />
      </Route>
      <Footer />
    </div>
  
  );
}

export default App;
