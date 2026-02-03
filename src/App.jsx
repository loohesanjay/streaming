import React, { useState } from "react";
import Carousel from "./components/Carousel";
import MovieModal from "./components/MovieModal";
import "./App.css";

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
    setModalOpen(true);
  };

  return (
    <div className="App">
      <h1>Trending Movies</h1>
      <Carousel onMovieClick={handleMovieClick} />
      <MovieModal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        movie={selectedMovie}
      />
    </div>
  );
}

export default App;
