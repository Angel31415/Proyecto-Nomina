import { Link } from "react-router-dom"; //Importación para activar la etiqueta Link 
export function Principal(){
    return(
        <section>
        <nav className="navbar">
        <div className="navbar-title">Nominaria</div>
        <div className="navbar-links">
        <Link to="/Inicio-Sesion" type="button" className="navbar-link"> 
            Iniciar Sesion
        </Link>
          <Link to="/Registro" className="navbar-link"> 
            Registro
          </Link>
        </div>
      </nav>
        <h1 className="Servicios">Servicios en linea</h1>
        <Link to="/Liquidacion">
        <div className="liquidacion-container">
                <div className="liquidacion">
                    <h2 className='titulo'>Liquidación</h2>
                    <p>Entra aquí para obtener tu liquidación.</p>
                </div>
                <img src="./imagenes-nominaria/img-principal2.jpg" alt="principal2" className="img1"/>
        </div>
        </Link>
        <Link to="/Empleados">
        <div className="Empleados-container">
                <div className="empleados">
                    <h2 className='titulo-empleados'>Empleados</h2>
                    <p>Información de nuestro personal actualizado</p>
                </div>  
        </div>
        </Link>
            <img src="./imagenes-nominaria/img-principal3.jpg" alt="principal3" className="img2"/>
            <Link to="/Faq">
            <div className="FAQ-container">
                <div className="FAQ">
                    <h2 className='titulo-FAQ'>FAQ</h2>
                    <p>Preguntas frecuentes acerca de nuestra página</p>
                </div>
            </div>
            </Link>
            <img src="./imagenes-nominaria/img-principal1.jpg" alt="principal3" className="img2"/>

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
export default Principal;

