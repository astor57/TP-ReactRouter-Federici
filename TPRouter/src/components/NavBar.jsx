import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Personas
        </Link>
            <Link to="/">Inicio</Link>
            <Link to="/estadisticas">Estadísticas</Link>
            <Link to="/contacto">Contacto</Link>
      </div>
    </nav>
  );
};

export default Navbar;