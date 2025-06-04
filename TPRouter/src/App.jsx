import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Layout from './components/Layout';
import Contactos from './components/Contacto';
import Estadisticas from './components/Estadisticas';

function App() {
  const [people, setPeople] = useState([]);

  const agregarPersona = (persona) => {
    setPeople([...people, persona]);
  };

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
        <Route path="/Contacto" element={<Contactos />}></Route>
        <Route path="/Estadisticas" element={<Estadisticas />}></Route>
      </Routes>
      </BrowserRouter>
      <Contactos agregarPersona={agregarPersona}/>
    </>
  )
}

export default App
