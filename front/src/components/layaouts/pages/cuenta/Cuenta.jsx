import { Link } from "react-router-dom"; 
import "./Cuenta.css"
export function Cuenta(){
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
                <div className="green-box short">Nombre Completo</div>
                <p className="email">Email@gmail.com</p>
                <div className="column">
                    <div className="green-box long">DATOS PERSONALES</div>
                    <div className="green-box long">CONFIGURACIONES</div>
                    <Link to="/" type="button"><div className="green-box long">CERRAR SESIÓN</div></Link>
                    <div className="green-box long">ELIMINAR USUARIO</div>
                </div>
            </div>
      
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
