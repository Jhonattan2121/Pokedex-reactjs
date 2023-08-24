import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Pokemons from "./pages/Pokemons";
import Home from "./pages/Home";
import Contato from "./pages/Contato";
import  './Global.css';
function App() {
  return (
    <Router>
           <Navbar/>
        <Routes>
            <Route path="/Home" element={<Home/>} />
            <Route path="/Pokemons" element={<Pokemons/>} />
            <Route path="/Contato" element={<Contato/>} />

        </Routes>
    </Router>
  );
}

export default App;
