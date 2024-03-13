import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Card from "./Components/Card/Card";
import { Outlet } from "react-router-dom";
import { fetchTopAlbums, fetchNewAlbums, fetchSongs } from "./api/api";
import { StyledEngineProvider } from "@mui/material";

function App() {
  const [searchData, setSearchData] = useState();
  const [data, setData] = useState({});

  const generateData = (key, source) => {
    source().then((data) => {
      setData((prevData) => ({
        ...prevData,
        [key]: data,
      }));
    });
  };

  useEffect(() => {
    generateData("topAlbums", fetchTopAlbums);
    generateData("newAlbums", fetchNewAlbums);
    generateData("songs", fetchSongs);
  }, []);

  const { topAlbums = [], newAlbums = [], songs = [] } = data;
  return (
    <>
      <StyledEngineProvider>
        <Navbar searchData={[...topAlbums, ...newAlbums]} />
        <Outlet context={{ data: { topAlbums, newAlbums, songs } }} />
      </StyledEngineProvider>
    </>
  );
}

export default App;
