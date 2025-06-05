import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const PersonaDetalle = () => {
  const { id } = useParams();
  const [persona, setPersona] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/people.json")
      .then((response) => response.json())
      .then((data) => {
        const foundPersona = data.find((p) => p.id === parseInt(id));
        if (foundPersona) {
          setPersona(foundPersona);
        } else {
          setError("Persona no encontrada");
        }
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div className="error-message">{error}</div>;

  return (
    <div className="persona-detalle">
      <h2>
        {persona.nombre} {persona.apellido}
      </h2>
      <p>Email: {persona.email}</p>
      <p>Edad: {persona.edad}</p>
      <p>
        {persona.edad >= 18 ? "Mayor de edad" : "Menor de edad"}
      </p>
      <p>Dirección: {persona.direccion}</p>
    </div>
  );
};

export default PersonaDetalle;