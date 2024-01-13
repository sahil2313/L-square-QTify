import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";


function App() {
  const [searchData, setSearchData] = useState();
  return (
    <>
      <Navbar searchData={searchData}/>
      <Hero />
    </>
  );
}

export default App;
