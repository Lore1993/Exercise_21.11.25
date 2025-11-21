import MovieGallery from "../components/MovieGallery";

const Home = () => {
  return (
    <>
      <MovieGallery title="Harry Potter Saga" saga="harry potter" />
      <MovieGallery title="Commedie romantiche" saga="love" />
      <MovieGallery title="Suggeriti per te" saga="jim" />
    </>
  );
};

export default Home;