import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";

const Carousel = ({ onMovieClick }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrending = async () => {
      const apiKey = import.meta.env.VITE_TMDB_API_KEY;
      console.log("API KEY:", apiKey); // 👈 DEBUG LINE

      const res = await axios.get(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`
      );

      console.log("MOVIES:", res.data.results); // 👈 DEBUG LINE
      setMovies(res.data.results);
    };

    fetchTrending();
  }, []);

  return (
    <div className="carousel">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onClick={onMovieClick}
        />
      ))}
    </div>
  );
};

export default Carousel;
