import React, { useState } from 'react';
import "./Iniciosesion.css"
import { Link, useNavigate } from 'react-router-dom';

export function Iniciosesion() {
  const [correo, setCorreo] = useState('');  // Estado para almacenar el correo electrónico ingresado por el usuario
  const [contraseña, setContraseña] = useState('');  // Estado para almacenar la contraseña ingresado por el usuario
  const [error, setError] = useState(''); // Estado para almacenar mensajes de error
  const navigate = useNavigate();

   // Función para manejar el envío del formulario de inicio de sesión
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/users'); // Realiza una petición para obtener los usuarios
      const data = await response.json();  // Convierte la respuesta a formato json
      // Busca el usuario con el correo electrónico y contraseña ingresados por el usuario
      const user = data.find(user => user.correo === correo && user.contraseña === contraseña);
      if (user) {
         // Si se encuentra el usuario, el inicio de sesión es exitoso
        console.log('inicio de sesion correcto', user);
        navigate('/');

        // Si no se encuentra el usuario, muestra un mensaje de error
      } else {
        alert('Correo o contraseña incorrectos');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setError('Error al iniciar sesión');
    }
  };

  return (
    <section>
      <h1>Inicio Sesión</h1>
      <form onSubmit={handleSubmit}>
        <div className="contenedor1">
          <h2 className="correo-texto">Correo</h2>
          <input
            type="text"
            name="correo"
            className="correo1"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
        </div>
        <div className="contenedor1">
          <h2 className="contraseña-texto">Contraseña</h2>
          <input
            type="password"
            name="contraseña"
            className="contraseña"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
          />
        </div>
        <div className="contenedor3">
          <button type="submit" className="inicio">Inicio</button>
          <Link to="/"><button type="button" className="Cancelar">Cancelar</button></Link>
        </div>
        {error && <p>{error}</p>}
      </form>
    </section>
  );
}

export default Iniciosesion;