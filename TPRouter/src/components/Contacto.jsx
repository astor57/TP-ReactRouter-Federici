import React, { useState } from "react";

const Contacto= (agregarPersona) =>{
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [edad, setEdad] = useState('');
    const [error, setError] = useState(false);

    const verCambios = (e) => {
        e.preventDefault();

        if (nombre.trim() === '' || apellido.trim() === '' || email.trim() === '' || edad.trim() === '' || edad<0) {
            setError(true);
            return;
        }

        setError(false);

        const nuevaPersona = {
            id: nombre, apellido, email, edad
        };

        agregarPersona(nuevaPersona);
    };

    return (
        <div>
            {error && <div className="error">Todos los campos son obligatorios</div>}
            <form onSubmit={verCambios}>
                <label>Nombre</label>
                <input type="text" className="u-full-width" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}/>

                <label>Apellido</label>
                <input type="text" className="u-full-width" placeholder="Apellido" value={apellido} onChange={(e) => setApellido(e.target.value)}/>

                <label>Email</label>
                <input type="email" className="u-full-width" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>

                <label>Edad</label>
                <input type="number" className="u-full-width" placeholder="Edad" value={edad} onChange={(e) => setEdad(e.target.value)}/>

                <button type="submit" className="botonAgregar">
                    Agregar Persona
                </button>
            </form>
        </div>
    );
}
export default Contacto;