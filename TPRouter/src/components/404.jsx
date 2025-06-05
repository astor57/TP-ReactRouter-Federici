import { Link } from "react-router-dom";

const PaginaError= () =>{
    return (
        <div className="not-found-container">
          <h1>404 - Página no encontrada</h1>
          <p>No encontramos lo que buscás 😕</p>
          <Link to="/" className="home-link">
            Volver al inicio
          </Link>
        </div>
      );
    
}
export default PaginaError;