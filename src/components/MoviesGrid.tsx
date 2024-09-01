import { useState, useEffect } from 'react';
import '../styles.css'
import MovieCard from './MovieCard';

export default function MoviesGrid(){
    
    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        // const m = ["a","b","c"];
        // Getting Error in Visual Studio but working fine in APP
        // setMovies(m);

        fetch("movies.json")
        .then(response => response.json())
        .then(data => setMovies(data))
    },[]);

    return(
        <div className='movies-grid'>
            {
                movies.map(movie => (
                    <MovieCard movie={movie} key={movie.id}/>
                ))
            }
        </div>
    );
}