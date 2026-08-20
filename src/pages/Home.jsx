import { useEffect, useState } from "react";
import React from "react";
import Hero from "../components/Hero";
import MovieCard from "../components/MovieCard";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const token = import.meta.env.VITE_TMDB_TOKEN;
  const fetchMovies = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/trending/movie/week",
        {
          headers: {
            Authorization: `Bearer ${token}`,
            accept: "application/json",
          },
        },
      );

      const data = await response.json();

      setMovies(data.results);
    } catch (err) {
      console.error("Movies could not be fetched:", err);
      setError("Movies could not be loaded. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchMovies();
  }, []);
  console.log(import.meta.env.VITE_TMDB_TOKEN);
  return (
    <>
      <Hero />
      {loading && (
        <p className="mt-6 text-center text-slate-400">Loading movies...</p>
      )}
      {error && <p className="mt-6 text-center text-red-400">{error}</p>}
      {/* <p>{movies.length} movies loaded</p> */}
      {!loading && !error && (
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Trending Movies
          </h2>

          <p className="mt-2 text-sm text-slate-400">
            Discover what everyone is watching right now.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
      )}
    </>
  );
};

export default Home;
