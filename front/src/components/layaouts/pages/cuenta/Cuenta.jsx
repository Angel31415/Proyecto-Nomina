import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Cuenta.css";

export function Cuenta(){
  const [userData, setUserData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    telefono: ''
  });
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  const navigate = useNavigate();

  const handleDeleteUser = async () => {
    try {
      const response = await fetch(`http://localhost:3001/users/${currentUser.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log('Usuario eliminado:', data);  
        localStorage.removeItem('currentUser'); // Eliminamos los datos del usuario del almacenamiento local
        navigate('/'); 
      } else {
        console.error('Error al eliminar usuario:', response.statusText);
      }
    } catch (error) {
      console.error('Error al eliminar usuario:', error);
    }
  };
  const handleGetUserData = async () => {
    try {
      const response = await fetch(`http://localhost:3001/users/${currentUser.id}`, {
        method: 'GET', // Método GET para obtener datos
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        const data = await response.json();
        setUserData(data);
      } else {
        console.error('Error al obtener datos personales:', response.statusText);
      }
    } catch (error) {
      console.error('Error al obtener datos personales:', error);
    }
  };
  const handleUpdateUser = async () => {
    try {
      const response = await fetch(`http://localhost:3001/users/${currentUser.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editData),
      });
      if (response.ok) {
        const data = await response.json();
        setUserData(data);
        setIsEditing(false);
        localStorage.setItem('currentUser', JSON.stringify(data)); // Actualiza el usuario en el local storage
      } else {
        console.error('Error al actualizar datos personales:', response.statusText);
      }
    } catch (error) {
      console.error('Error al actualizar datos personales:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
    return(
        <section>
             <nav className="navbar">
        <div className="navbar-title">Nominaria</div>
        <div className="navbar-links">
        <Link to="/Cuenta" type="button" className="navbar-link"> 
            Cuenta
        </Link>
        </div>
      </nav>

      <div className="content">
        <h1 className="title">Usuario</h1>
        <div className="image-container">
          <img src="./imagenes-nominaria/usuario.png" alt="Perfil" className="profile-image" />
        </div>
        <div className="green-box short">{currentUser.nombre} {currentUser.apellido}</div>
        <p className="email">{currentUser.correo}</p>
        <div className="column">
          <div className="green-box long" onClick={handleGetUserData}>DATOS PERSONALES</div>
          <div className="green-box long" onClick={() => { handleGetUserData(); setIsEditing(true); }}>CONFIGURACIONES</div>
          <Link to="/" type="button"><div className="green-box long">CERRAR SESIÓN</div></Link>
          <div className="green-box long" onClick={handleDeleteUser}>ELIMINAR USUARIO</div>
        </div>
      </div>
      
      {userData && (
        <div className="user-data">
          <h2>Datos Personales</h2>
          <p>Nombre: {userData.nombre}</p>
          <p>Apellido: {userData.apellido}</p>
          <p>Correo: {userData.correo}</p>
          <p>Teléfono: {userData.telefono}</p>
        </div>
      )}

{isEditing && (
        <div className="edit-form">
          <h2>Editar Información</h2>
          <form onSubmit={(e) => { e.preventDefault(); handleUpdateUser(); }}>
            <label>
              Nombre:
              <input type="text" name="nombre" value={editData.nombre} onChange={handleChange} />
            </label>
            <label>
              Apellido:
              <input type="text" name="apellido" value={editData.apellido} onChange={handleChange} />
            </label>
            <label>
              Correo:
              <input type="email" name="correo" value={editData.correo} onChange={handleChange} />
            </label>
            <label>
              Teléfono:
              <input type="text" name="telefono" value={editData.telefono} onChange={handleChange} />
            </label>
            <button type="submit">Guardar Cambios</button>
            <button type="button" onClick={() => setIsEditing(false)}>Cancelar</button>
          </form>
        </div>
      )}

      
            <div className="footer">
               
               <h4 className="contactenos">¡Contactenos!</h4>
                <h4 className="tel">Telefono: 3012621770 </h4>
                <h4 className="correo">Correo electronico: nominariacol@gmail.com </h4>
                <h4 className="dir">Dirección: cra20B #54-70 circular sur </h4>
               <h4 className="Redes">Redes sociales</h4>
               <img src="./imagenes-nominaria/linea.png" alt="linea"  className="linea"/>
               <div className="logos">
               <img src="./imagenes-nominaria/facebook.jpg" alt="facebook"  className="facebook"/>
               <img src="./imagenes-nominaria/instagram.jpg" alt="instagram"  className="instagram"/>
               <img src="./imagenes-nominaria/twiter.jpg" alt="twiter"  className="twiter"/>
               </div>
               <h4 className="facebook-text">facebook: nominariaCol</h4>
               <h4 className="instagram-text">Instagram: nominaria_col</h4>
               <h4 className="twiter-text">X: @nominariaColSA</h4>
           </div>
      </section>
    )
}
export default Cuenta;
