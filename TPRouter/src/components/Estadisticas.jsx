import { useState, useEffect } from "react";

const Estadisticas = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetch("/people.json")
      .then((response) => response.json())
      .then((data) => {
        const total = data.length;
        const mayores35 = data.filter((p) => p.edad > 35).length;
        const maxAge = Math.max(...data.map((p) => p.edad));
        const minAge = Math.min(...data.map((p) => p.edad));
        const promedio = (data.reduce((sum, p) => sum + p.edad, 0) / total).toFixed(1);

        setStats({
          total,
          mayores35,
          maxAge,
          minAge,
          promedio,
          mayores: data.filter(p => p.edad === maxAge),
          menores: data.filter(p => p.edad === minAge)
        });
      });
  }, []);

  if (!stats) return <div>Cargando estadísticas...</div>;

  return (
    <div className="estadisticas-container">
      <h1>Estadísticas</h1>
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total personas</h3>
          <p>{stats.total}</p>
          <h3>Total personas mayores de 35 años</h3>
          <p>{stats.mayores35}</p>
          <h3>Personas de mayor edad</h3>
          <p>{stats.maxAge}</p>
          <h3>Personas de menor edad</h3>
          <p>{stats.minAge}</p>
          <h3>Promedio edad</h3>
          <p>{stats.promedio}</p>
        </div>
      </div>
    </div>
  );
};

export default Estadisticas;