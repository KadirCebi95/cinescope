import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 transition duration-300 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-950/20">
      <div className="relative overflow-hidden">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="aspect-[2/3] w-full object-cover transition duration-500 hover:scale-105"
        />

        <div className="absolute right-3 top-3 rounded-full bg-slate-950/85 px-2.5 py-1 text-xs font-semibold text-amber-400 backdrop-blur">
          ⭐ {movie.vote_average.toFixed(1)}
        </div>
      </div>

      <div className="p-4">
        <h2 className="truncate text-base font-semibold text-white">
          {movie.title}
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          {movie.release_date?.split("-")[0] || "Unknown"}
        </p>
      </div>
    </article>
  );
};

export default MovieCard;
