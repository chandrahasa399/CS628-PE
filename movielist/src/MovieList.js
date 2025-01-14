
import React, { useState } from 'react';

const moviesData = [
  { title: 'Inception', genre: 'Action', releaseYear: 2010 },
  { title: 'The Shawshank Redemption', genre: 'Drama', releaseYear: 1984 },
  { title: 'The Dark Knight', genre: 'Comedy', releaseYear: 2021 },
  
];

const MovieList = () => {
  const [selectedGenre, setSelectedGenre] = useState('All Genres');

  const handleChangeGenre = (event) => {
    setSelectedGenre(event.target.value);
  };

  const handleMovieClick = (title) => {
    alert(title);
  };

  const filteredMovies = selectedGenre === 'All Genres'
    ? moviesData
    : moviesData.filter(movie => movie.genre === selectedGenre);

  return (
    <div>
      <h1>Movie List</h1>
      <div>
      <label htmlFor="genre-select"></label>
      <select id="genre-select" value={selectedGenre} onChange={handleChangeGenre}>
        <option value="All Genres">All Genres</option>
        {Array.from(new Set(moviesData.map(movie => movie.genre))).map(genre => (
          <option key={genre} value={genre}>{genre}</option>
        ))}
      </select>
      </div>
      <ul>
        {filteredMovies.map(movie => (
          <li key={movie.title} onClick={() => handleMovieClick(movie.title)}>
             <b>{movie.title}</b><br />
             {movie.genre}<br />
             {movie.releaseYear}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
