import "./App.css";
import { useEffect, useState } from "react";
const KEY = "769d777b";

export default function App() {
  // const [query, setQuery] = useState('"trip"');
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  // useEffect(function () {
  //   console.log("A");
  // });
  // useEffect(function () {
  //   console.log("B");
  // }, []);
  // useEffect(
  //   function () {
  //     console.log("D");
  //   },
  //   [query]
  // );

  // console.log("C");
  function handleSelectMovie(id) {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  }
  function handleCloseMovie() {
    setSelectedId(null);
  }
  console.log(selectedId);
  useEffect(
    function () {
      async function fetchMovie() {
        try {
          setIsLoading(true);
          setError("");

          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
          );

          if (!res.ok)
            throw new Error("Something went wrong in fetching movies!!");
          const data = await res.json();
          if (data.Response === "False") throw new Error("No movie Found");
          setMovies(data.Search);

          setIsLoading(false);
        } catch (err) {
          console.log(err);
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }
      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }

      fetchMovie();
    },
    [query]
  );

  return (
    <div>
      <Navbar>
        <Logo />
        <Search query={query} setQuery={setQuery} />
        <NumList movies={movies} />
      </Navbar>
      <Main>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MoviesList movies={movies} onSelect={handleSelectMovie} />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>
        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
            />
          ) : (
            <WatchedSummary watched={watched} />
          )}
        </Box>
      </Main>
    </div>
  );
}
function Search({ query, setQuery }) {
  return (
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search movies ..."
    />
  );
}
function Logo() {
  return <span className="logo">🍿 usePopCorn</span>;
}
function NumList({ movies }) {
  return <span className="result"> Found {movies.length} results!</span>;
}
function Navbar({ children }) {
  return <nav className="nav-bar">{children}</nav>;
}

function Main({ children }) {
  return <main className="main">{children}</main>;
}
function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen((show) => !show)}>
        {isOpen ? "–" : "+"}
      </button>
      {isOpen && children}
    </div>
  );
}
function MoviesList({ movies, onSelect, onCloseMovie }) {
  return (
    <ul className="list">
      {movies?.map((movie) => (
        <Movie
          movie={movie}
          key={movie.imdbID}
          onSelect={onSelect}
          onCloseMovie={onCloseMovie}
        />
      ))}
    </ul>
  );
}
function Movie({ movie, onSelect, onCloseMovie }) {
  return (
    <li onClick={() => onSelect(movie.imdbID)} onCloseMovie={onCloseMovie}>
      <img src={movie.Poster} className="img" />
      <h3 className="title">{movie.Title}</h3>
      <div>
        <p>
          <span>🗓️</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}
function WatchedSummary({ watched }) {
  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span> {watched.length}movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span></span>
        </p>
        <p>
          <span>🌟</span>
          <span></span>
        </p>
        <p>
          <span>⏳</span>
          <span> min</span>
        </p>
      </div>
    </div>
  );
}
function Loader() {
  return <p className="loader"> Loading....</p>;
}
function ErrorMessage({ message }) {
  return (
    <p className="error">
      <span>⛔⛔</span>
      {message}
    </p>
  );
}
function MovieDetails({ selectedId, onCloseMovie }) {
  return (
    <div className="details">
      <button className="btn-back" onClick={onCloseMovie}>
        &larr;
      </button>
      {selectedId}
    </div>
  );
}
