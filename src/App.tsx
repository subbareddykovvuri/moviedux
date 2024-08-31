import './App.css';
import './styles.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MoviesGrid from './components/MoviesGrid';


function App() {

  return (
    
      <div className="App">
        {/*<header className="header">
          <h1>Welcome to Moviedux</h1>
        </header>*/}
        <div className='container'>
          <Header></Header>
          <MoviesGrid></MoviesGrid>
        </div>
      
        {/*<footer className="footer">
          <p className="footer">Footer content</p>
        </footer>*/}
        <Footer></Footer>
      </div>
    
  )
}

export default App
