// src/components/ReviewForm.jsx
import React, { useState } from 'react';

function ReviewForm({ movieId, onAddReview }) {
  // Estado local apenas para o formulário
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Impede o recarregamento da página

    // Validação simples
    if (comment.trim() === "") {
      alert("Por favor, escreva um comentário.");
      return;
    }
    
    // Cria o objeto da nova avaliação
    const newReview = {
      rating: parseInt(rating), // Garante que a nota é um número
      comment: comment
    };

    // Chama a função que veio do App.jsx (nosso "backend")
    onAddReview(movieId, newReview);

    // Limpa o formulário após o envio
    setRating(5);
    setComment("");
  };

  return (
    <form onSubmit={handleSubmit} className="review-form">
      <h4>Deixe sua avaliação:</h4>
      <label>
        Nota:
        <select value={rating} onChange={(e) => setRating(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </label>
      <label>
        Comentário:
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="O que você achou do filme?"
          rows="3"
        />
      </label>
      <button type="submit">Enviar Avaliação</button>
    </form>
  );
}

export default ReviewForm;
