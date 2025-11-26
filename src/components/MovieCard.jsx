import { Link } from 'react-router-dom'

const MovieCard = ({ movie }) => {
  return (
    <div className="col text-center">
      <Link to={`/movie/${movie.imdbID}`} style={{ textDecoration: 'none' }}>
        <img 
          src={movie.Poster} 
          alt={movie.Title} 
          className="img-fluid rounded movie-hover movie-img"
        />
      </Link>
    </div>
  );
};
export default MovieCard;