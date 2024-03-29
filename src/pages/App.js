import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Search from "./Search/Search";
import History from "./History/History";
import About from "./About/About";
import Streaming from "./Streaming/Streaming";
import ShowMore from "./ShowMore/ShowMore";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/history" element={<History />} />
      <Route path="/about" element={<About />} />
      <Route path="/streaming/:animeId/*" element={<Streaming />} />
      <Route path="/animes/:type" element={<ShowMore />} /> 
    </Routes>
  );
};

export default App;
