// src/components/MovieCard.jsx
import React from 'react';
import ReviewForm from './ReviewForm';

function MovieCard({ movie, onAddReview }) {

  // ⚙️ "Backend" - Função para calcular a média das notas
  const calculateAverageRating = () => {
    if (movie.reviews.length === 0) {
      return "N/A"; // Nenhuma avaliação ainda
    }
    const sum = movie.reviews.reduce((acc, review) => acc + review.rating, 0);
    return (sum / movie.reviews.length).toFixed(1); // Média com 1 casa decimal
  };

  const averageRating = calculateAverageRating();

  return (
    <div className="movie-card">
      <img src={movie.posterUrl} alt={`Pôster de ${movie.title}`} className="movie-poster" />
      <div className="movie-details">
        <h2>{movie.title}</h2>
        <p className="movie-synopsis">{movie.synopsis}</p>
        
        <h3>Média: ⭐ {averageRating}</h3>

        <div className="movie-reviews">
          <h4>Avaliações ({movie.reviews.length}):</h4>
          <ul>
            {movie.reviews.map((review, index) => (
              <li key={index}>
                <strong>Nota {review.rating}/5:</strong> "{review.comment}"
              </li>
            ))}
          </ul>
        </div>
        
        {/* Formulário de avaliação é renderizado aqui */}
        <ReviewForm movieId={movie.id} onAddReview={onAddReview} />
      </div>
    </div>
  );
} // <- A chave extra estava aqui

export default MovieCard;