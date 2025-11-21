import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const MovieGallery = ({ title, saga }) => {
  const [movies, setMovies] = useState([]);


  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=d85b15e0&s=${saga}`)
      .then(res => res.json())
      .then(data => setMovies(data.Search || []))
      .catch(err => console.error(err));
  }, [saga]);

  return (
    <div className="container-fluid text-white mb-5">
      <h5 className="mb-3 title">{title}</h5>

      <div className="d-flex flex-row justify-content-evenly gap-2 overflow-auto">
        {movies.slice(0,8).map(movie => (
          <MovieCard key={movie.imdbID} movie={movie}  className="movie-column flex-shrink-0" />
        ))}
      </div>
    </div>
  );
};

export default MovieGallery;
