import { useState, useEffect } from 'react';
import '../styles.css'
import MovieCard from './MovieCard';

export default function MoviesGrid() {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const [genre, setGenre] = useState("All Genres");
    const [rating, setRating] = useState("All");

    useEffect(() => {
        // const m = ["a","b","c"];
        // Getting Error in Visual Studio but working fine in APP
        // setMovies(m);

        fetch("movies.json")
            .then(response => response.json())
            .then(data => setMovies(data))
    }, []);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value)
    }

    const filteredMovies = movies.filter(movie =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (

        <div>
            <input type='text' className='search-input' placeholder='Search Movies ...' value={searchTerm} onChange={handleSearchChange} />
            <div className='filter-bar'>
                <div className='filter-slot'>
                    <label>Genre</label>
                    <select className='filter-dropdown'>
                        <option>All Genres</option>
                        <option>Action</option>
                        <option>Drama</option>
                        <option>Fantasy</option>
                        <option>Horror</option>
                    </select>
                </div>

                <div className='filter-slot'>
                    <label>Rating</label>
                    <select className='filter-dropdown'>
                        <option>All</option>
                        <option>Good</option>
                        <option>Ok</option>
                        <option>Bad</option>
                    </select>
                </div>
            </div>
            <div className='movies-grid'>
                {
                    filteredMovies.map(movie => (
                        <MovieCard movie={movie} key={movie.id} />
                    ))
                }
            </div>
        </div>

    );
}