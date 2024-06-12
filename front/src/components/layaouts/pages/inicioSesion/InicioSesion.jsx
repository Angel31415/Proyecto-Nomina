import React, { useState } from 'react';
import "./Iniciosesion.css"
import { Link, useNavigate } from 'react-router-dom';

export function Iniciosesion() {
  const [correo, setCorreo] = useState('');  
  const [contraseña, setContraseña] = useState('');  
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/users');
      const data = await response.json();  
      const user = data.find(user => user.correo === correo && user.contraseña === contraseña);
      if (user) {
        console.log('inicio de sesion correcto', user);
        localStorage.setItem('currentUser', JSON.stringify(user));
        navigate('/Principal-iniciosesion', { state: { user } }); // Pasamos el usuario como estado al navegar
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