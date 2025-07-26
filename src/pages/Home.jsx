import React, { useState, useEffect, createContext } from 'react';
import MovieCard from '../components/MovieCard';
import NavBar from '../components/NavBar';

export const contextData = createContext();

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [Data, setData] = useState({});
  const [search, setSearch] = useState("");
  const [liked, setLiked] = useState(() => {
    const saved = localStorage.getItem("likedItems");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("likedItems", JSON.stringify(liked));

    const timeout = setTimeout(() => {
      liked.forEach(item => {
        const btn = document.getElementById(item.id);
        if (btn && btn.previousElementSibling) {
          btn.previousElementSibling.setAttribute("fill", "red");
        }
      });

      const favCount = document.getElementById("favoriteCount");
      if (favCount) {
        favCount.innerHTML = liked.length;
      }
    }, 100);

    return () => clearTimeout(timeout); 
  }, [liked]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetch("https://dragonball-api.com/api/characters?limit=50");
        const res = await data.json();
        setData(res);
      } catch (err) {
        console.error("API failed:", err);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  return (
    <contextData.Provider
      value={{
        dt: Data.items || [],
        load: loading,
        search,
        setSearch,
        setLiked,
        liked
      }}
    >
      <NavBar />
      <MovieCard />
    </contextData.Provider>
  );
};

export default Home;