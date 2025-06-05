import { useState, useEffect } from "react";
import PersonaCard from "./PersonaCard";

const Home = () => {
  const [personas, setPersonas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/people.json")
      .then((response) => response.json())
      .then((data) => {
        setPersonas(data);  
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error cargando datos:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Cargando personas...</div>;

  return (
    <div className="home-container">
      <h1>Directorio de Personas</h1>
      <div className="personas-grid">
        {personas.map((persona) => (
          <PersonaCard key={persona.id} persona={persona} />
        ))}
      </div>
    </div>
  );
};

export default Home;