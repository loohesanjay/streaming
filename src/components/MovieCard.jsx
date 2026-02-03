import React from "react";

const MovieCard = ({ movie, onClick }) => {
  const imageUrl =
    "https://image.tmdb.org/t/p/w500" + movie.poster_path;

  return (
    <div className="movie-card" onClick={() => onClick(movie)}>
      <img src={imageUrl} alt={movie.title} />
      <h3>{movie.title}</h3>
    </div>
  );
};

export default MovieCard;
