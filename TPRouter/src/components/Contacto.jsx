import { useState } from "react";

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    edad: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.nombre.trim()) newErrors.nombre = "Nombre es requerido";
    if (!formData.apellido.trim()) newErrors.apellido = "Apellido es requerido";
    if (!formData.email.trim()) {
      newErrors.email = "Email es requerido";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Email no válido";
    }
    if (!formData.edad) {
      newErrors.edad = "Edad es requerida";
    } else if (isNaN(formData.edad) || formData.edad <= 0) {
      newErrors.edad = "Edad debe ser un número positivo";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Aquí normalmente enviarías los datos a un servidor
      console.log("Formulario enviado:", formData);
      setIsSubmitted(true);
      setFormData({
        nombre: "",
        apellido: "",
        email: "",
        edad: "",
      });
    }
  };

  return (
    <div className="contacto-container">
      <h1>Formulario de Contacto</h1>
      {isSubmitted ? (
        <div className="success-message">
          ¡Formulario enviado con éxito!
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contacto-form">
          <div className="form-group">
            <label>Nombre:</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
            />
            {errors.nombre && <span className="error">{errors.nombre}</span>}
          </div>
          <div className="form-group">
            <label>Apellido:</label>
            <input
              type="text"
              name="apellido"
              value={formData.apellido}
              onChange={handleChange}
            />
            {errors.apellido && <span className="error">{errors.apellido}</span>}
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="form-group">
            <label>Edad:</label>
            <input
              type="number"
              name="edad"
              value={formData.edad}
              onChange={handleChange}
            />
            {errors.edad && <span className="error">{errors.edad}</span>}
          </div>
          <button type="submit" className="submit-btn">
            Enviar
          </button>
        </form>
      )}
    </div>
  );
};

export default Contacto;