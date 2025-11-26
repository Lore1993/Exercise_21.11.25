import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

const MovieDetails = () => {
  const { imdbID } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=d85b15e0&i=${imdbID}`)
      .then(res => res.json())
      .then(data => setMovie(data));
  }, [imdbID]);

  if (!movie) return <h2 className="text-center mt-5">Caricamento...</h2>;

  return (
    <div className="d-flex justify-content-center mt-4">
      <Card className="shadow" style={{ width: "22rem" }}>
        <Card.Img variant="top" src={movie.Poster} alt={movie.Title} />

        <Card.Body>
          <Card.Title className="text-white">{movie.Title}</Card.Title>

          <Card.Text className="text-white-50">
            <strong>Anno:</strong> {movie.Year} <br />
            <strong>IMDb ID:</strong> {imdbID}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieDetails;