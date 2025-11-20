// src/App.jsx
import React, { useState } from 'react';
import MovieList from './components/MovieList.jsx';
import './App.css';

// Nossos dados iniciais do "banco de dados"
const initialMovies = [
  {
    id: 1,
    title: "O Poderoso Chefão",
    synopsis: "A saga da família Corleone, uma poderosa dinastia da máfia ítalo-americana.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
    reviews: [
      { rating: 5, comment: "Clássico absoluto. Obra-prima." },
      { rating: 4, comment: "Muito bom, mas um pouco longo." }
    ]
  },
  {
    id: 2,
    title: "Matrix",
    synopsis: "Um hacker descobre que sua realidade é uma simulação e se junta à rebelião.",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",
    reviews: [
      { rating: 5, comment: "Mudou minha vida!" }
    ]
  }
];

function App() {
  // 💾 O "banco de dados" de filmes vive no estado do App
  const [movies, setMovies] = useState(initialMovies);

  // ⚙️ A "rota de backend" para registrar uma nova avaliação
  const handleAddReview = (movieId, newReview) => {
    // Atualiza o estado 'movies'
    setMovies(prevMovies => {
      // Usamos .map() para criar um *novo* array (princípio da imutabilidade)
      return prevMovies.map(movie => {
        // Encontra o filme com o ID correto
        if (movie.id === movieId) {
          // Retorna um *novo* objeto de filme
          return {
            ...movie, // Copia as propriedades antigas (título, sinopse...)
            // Cria um *novo* array de reviews, incluindo o novo
            reviews: [...movie.reviews, newReview]
          };
        }
        // Se não for o filme certo, retorna ele sem modificação
        return movie;
      });
    });
  };

  return (
    <div className="App">
      <h1>🎥 CineReview Básico</h1>
      <MovieList movies={movies} onAddReview={handleAddReview} />
    </div>
  );
}

export default App;
