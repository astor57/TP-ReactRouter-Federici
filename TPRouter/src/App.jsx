import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import DetallesPersona from "./components/DetallesPersona";
import Contacto from "./components/Contacto";
import Estadisticas from "./components/Estadisticas";
import NotFound from "./components/404";
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="persona/:id" element={<DetallesPersona />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="estadisticas" element={<Estadisticas />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;