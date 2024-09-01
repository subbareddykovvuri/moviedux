import '../styles.css'


export default function MovieCard({movie}) {

    const handleErro =(e) => {
        e.target.src = "images/default.jpg";
    }

    return (
        <div key={movie.id} className='movie-card'>
            <img src={`images/${movie.image}`} alt={movie.title}  onError={handleErro}/>
            <div className='movie-card-info'>
                <h3 className='movie-card-genre'>{movie.title}</h3>
                <p className='movie-card-rating'>{movie.rating}</p>
            </div>
        </div>
    )
}