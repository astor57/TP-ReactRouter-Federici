import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Layout from './components/Layout';
import Contactos from './components/Contacto';
import Estadisticas from './components/Estadisticas';
import DetallePersona from "./components/DetallesPersona";
import NotFound from './components/404';
import Home from "./components/Home";



function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Layout />}></Route>
        <Route path="/Contacto" element={<Contactos />}></Route>
        <Route path="/Estadisticas" element={<Estadisticas />}></Route>
        <Route path="people/:id" element={<DetallePersona />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
