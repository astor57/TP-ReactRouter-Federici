import { Link } from "react-router-dom";

const PersonaCard = ({ persona }) => {
  return (
    <div className="persona-card">
      <h3>
        {persona.nombre} {persona.apellido}
      </h3>
      <p>Edad: {persona.edad}</p>
      <Link to={`/persona/${persona.id}`} className="btn-ver-mas">
        Ver más
      </Link>
    </div>
  );
};

export default PersonaCard;