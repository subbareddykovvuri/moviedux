import './App.css';
import './styles.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MoviesGrid from './components/MoviesGrid';
import Watchlist from './components/Watchlist';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import { useState,useEffect } from 'react';

function App() {

  const [movies, setMovies] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    // const m = ["a","b","c"];
    // Getting Error in Visual Studio but working fine in APP
    // setMovies(m);

    fetch("movies.json")
        .then(response => response.json())
        .then(data => setMovies(data))
}, []);

  const toggleWatchlist = (movieId) =>{
    setWatchlist(prev => 
      prev.includes(movieId) ? prev.filter(id => id !== movieId) : [...prev, movieId]
    )
  }

  return (
    
      <div className="App">
        {/*<header className="header">
          <h1>Welcome to Moviedux</h1>
        </header>*/}
        <div className='container'>
          <Header></Header>
          <Router>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/watchlist" >Watchlist</Link>
                </li>
              </ul>
            </nav>
            <Routes>
              <Route path ="/" element={<MoviesGrid watchlist={watchlist}  movies={movies} toggleWatchlist={toggleWatchlist}/>}></Route>
              <Route path ="/watchlist" element={<Watchlist movies={movies} watchlist={watchlist} toggleWatchlist={toggleWatchlist}/>}></Route>
            </Routes>
          </Router>
        </div>
      
        {/*<footer className="footer">
          <p className="footer">Footer content</p>
        </footer>*/}
        <Footer></Footer>
      </div>
    
  )
}

export default App
