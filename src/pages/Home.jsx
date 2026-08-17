import { useEffect, useState } from "react";
import React from "react";
import Hero from "../components/Hero";


const Home = () => {
  const [movies,setMovies] = useState([]);
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
    } catch (error) {
      console.error("Movies could not be fetched:", error);
    }
  };
  useEffect(() => {
  fetchMovies();
}, []);
console.log(import.meta.env.VITE_TMDB_TOKEN);
  return (
    <>
     <Hero />
     <p>{movies.length} movies loaded</p>
    </>
  )
  
};

export default Home;
