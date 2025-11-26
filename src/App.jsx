import './App.css'
import './index.css'
import NetflixNavbar from "./components/NetflixNavbar"
import Home from "./components/Home"
import UnderNavBar from "./components/UnderNavBar"
import NetflixFooter from './components/TheFooter'
import TvShows from "./components/TvShows" 
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MovieDetails from "./components/MovieDetails.jsx"

function App() {
  return (
    <BrowserRouter>
      <NetflixNavbar />
      <UnderNavBar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon-shows" element={<TvShows />} />
        <Route path="/movie/:imdbID" element={<MovieDetails />} />
      </Routes>
      
      <NetflixFooter />
    </BrowserRouter>
  );
}

export default App;