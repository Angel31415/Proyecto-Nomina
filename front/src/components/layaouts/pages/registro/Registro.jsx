import React, { useState } from 'react';
import "./Registro.css"
import { Link, useNavigate } from 'react-router-dom';


export function Registro(){
   const [nombre, setNombre] = useState(''); //Estado para almacenar el nombre
   const [apellido, setApellido] = useState(''); //Estado para almacenar el apellido
   const [correo, setCorreo] = useState(''); //Estado para almacenar el correo
   const [contraseña, setContraseña] = useState(''); //Estado para almacenar la contraseña
   const [telefono, setTelefono] = useState(''); //Estado para almacenar el telefono
   const navigate = useNavigate();
    
   // Función para manejar el envío del formulario de registro
   const handleSubmit = async (e) => {
     e.preventDefault();
      // Verica si todos los campos de registro estan llenos
    if (!nombre || !apellido || !correo || !contraseña || !telefono) {
      alert('Por favor, completa todos los campos.'); // Establece un mensaje de error si algún campo está vacío
      return;
    }
     try {
       const response = await fetch('http://localhost:3001/users', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
         },
         body: JSON.stringify({ nombre, apellido, correo, contraseña, telefono }), // Envía los datos del usuario al servidor
       });
       const data = await response.json();
       console.log('User registered:', data);  // Registra los datos del usuario en la consola
       navigate('/');
       

     } catch (error) {
       console.error('Error registering user:', error); 
       setError('Ha ocurrido un error al registrar al usuario.'); // Establece un mensaje de error si hay un problema con el registro
     }
   };
    return(
      <section>
      <h1>Registro</h1>
      <form onSubmit={handleSubmit}>
        <div className="contenedor1">
          <h2 className="nombre-texto">Nombre</h2>
          <input
            type="text"
            name="nombre"
            className="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="contenedor1">
          <h2 className="apellido-texto">Apellido</h2>
          <input
            type="text"
            name="apellido"
            className="apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
        </div>
        <div className="contenedor4">
          <h2 className="correo-texto">Correo</h2>
          <input
            type="email"
            name="correo"
            className="correo1"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
        </div>
        <div className="contenedor5">
          <h2 className="contraseña-texto">Contraseña</h2>
          <input
            type="password"
            name="contraseña"
            className="contraseña"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
          />
        </div>
        <div className="contenedor6">
          <h2 className="telefono-texto">Telefono</h2>
          <input
            type="number"
            name="telefono"
            className="telefono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </div>
        <div className="contenedor3">
         <button type="submit" className="inicio">Registro</button>
          <Link to="/"><button type="button" className="Cancelar">Cancelar</button></Link>
        </div>
      </form>
    </section>
    );
};
export default Registro;