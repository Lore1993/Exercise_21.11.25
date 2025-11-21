const MovieCard = ({ movie }) => {
  return (
    <div className="col text-center">
      <img 
        src={movie.Poster} 
        alt={movie.Title} 
        className="img-fluid rounded movie-hover movie-img "
      />
    </div>
  );
};

export default MovieCard;
