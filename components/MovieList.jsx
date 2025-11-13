// src/components/MovieList.jsx
// (Note que .jsx ou .js funcionam, o importante é o conteúdo)

import React from 'react';
import MovieCard from './MovieCard';

// Recebe 'movies' e a função 'onAddReview' por props
function MovieList({ movies, onAddReview }) {
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onAddReview={onAddReview} // Passa a função para o próximo componente
        />
      ))}
    </div>
  );
}

export default MovieList;