// import logo from './logo.svg';
import './App.css';
import About from './components/About'
import HeroDisplay from './SuperheroData/HeroDisplay'
import HeroSearch from './SuperheroData/HeroSearch'
import SuperheroData from './SuperheroData/index'
import { Route } from "react-router-dom"
import Nav from './components/Nav'

function App() {
  return (
    <div className="App">
      <Nav />
      <Route path="/about">
        <About />
      </Route>
      <Route path="/hero-display">
        <HeroDisplay />
      </Route>
      <Route path="/hero-search">
        <HeroSearch />
      </Route>
      <Route path="/">
        <SuperheroData />
      </Route>
    </div>
  );
}

export default App;
