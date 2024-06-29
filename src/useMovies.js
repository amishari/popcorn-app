import { useState, useEffect } from "react";
const KEY = "769d777b";
export function useMovies(query, callback) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(
    function () {
      callback?.();
      const controller = new AbortController();
      async function fetchMovie() {
        try {
          setIsLoading(true);
          setError("");

          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal }
          );

          if (!res.ok)
            throw new Error("Something went wrong in fetching movies!!");
          const data = await res.json();
          if (data.Response === "False") throw new Error("No movie Found");
          setMovies(data.Search);

          setIsLoading(false);
        } catch (err) {
          if (err.name !== "AbortError") {
            setError(err.message);
          }
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
      return function () {
        controller.abort();
      };
    },
    [query] // if we add callback as a dependency which reacts requires it will crash!!
  );
  return { movies, isLoading, error };
}
