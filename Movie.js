import React, { useCallback, useEffect, useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import AddMovie from './components/AddMovie';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async() => {
    setIsLoading(true);
    setError(null)
    try {
      const response = await fetch('https://react-http-9c92c-default-rtdb.firebaseio.com/movies.json')
      if (!response.ok) {
        throw new Error('Something went wrong!')
      }
      const data = await response.json();
      const loadedMovies = [];
      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        })
      }
      
      setMovies(loadedMovies)
      
    } catch (error) {
      setError(error.message)
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  async function addMovieHandler(movie) {
    const resonpse = await fetch('https://react-http-9c92c-default-rtdb.firebaseio.com/movies.json', {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'content-Type': 'application/json'
      }
    })
    const data = await resonpse.json();
    console.log(data)
  }

  async function deleteMovieHandler(movie) {
    const resonpse = await fetch('https://react-http-9c92c-default-rtdb.firebaseio.com/movies.json', {
      method: 'DELETE',
      body: JSON.stringify(movie),
      headers: {
        'content-Type': 'application/json'
      }
    })
    const data = await resonpse.json();
    console.log(data)
  }

  let content = <p>{error}</p>

  if (movies.length > 0) {
    content = <MoviesList movies={movies} onDeleteMovie={deleteMovieHandler} />
  }

  if (error) {
    content = <p>{error}</p>
  }

  if (isLoading) {
    content = <p>Loading...</p>
  }

  return (
    <React.Fragment>
      <section>
      <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;
