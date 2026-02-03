import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const MovieModal = ({ isOpen, onRequestClose, movie }) => {
  if (!movie) return null;

  const imageUrl =
    "https://image.tmdb.org/t/p/w500" + movie.poster_path;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal"
      overlayClassName="overlay"
    >
      <button className="close-btn" onClick={onRequestClose}>
        X
      </button>
      <img src={imageUrl} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
      <p>Release Date: {movie.release_date}</p>
      <p>Rating: {movie.vote_average}</p>
    </Modal>
  );
};

export default MovieModal;
