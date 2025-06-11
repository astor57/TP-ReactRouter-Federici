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
          const found = data.find(p => p.id === parseInt(id));
          if (found) {
            setPersona(found);
          } else {
            setError("Persona no encontrada");
          }
          setLoading(false);
        });
    }, [id]);
  
    if (loading) return <div>Cargando...</div>;
    if (error) return <div className="error">{error}</div>;
  
    return (
      <div className="persona-detalle">
        <h2>{persona.nombre} {persona.apellido}</h2>
        <p><strong>Email:</strong> {persona.email}</p>
        <p><strong>Edad:</strong> {persona.edad} - {persona.edad >= 18 ? "Mayor" : "Menor"} de edad</p>
      </div>
    );
  };
export default PersonaDetalle;