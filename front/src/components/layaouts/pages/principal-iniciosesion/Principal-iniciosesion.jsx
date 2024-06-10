import { Link } from "react-router-dom"; 
import "./Principal-iniciosesion.css"
export function Principaliniciosesion(){
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
      <div className="green-boxes-container">
                <div className="column">
                    <div className="green-box">Empleados</div>
                    <div className="green-box">Liquidaciones</div>
                    <div className="green-box">Reportes</div>
                    <div className="green-box">Historial <br/>Liquidaciones</div>
                </div>
                <div className="column">
                    <div className="green-box">Nomina</div>
                    <div className="green-box">Bonificaciones</div>
                    <div className="green-box">Impuestos y <br/>Deducciones</div>
                    <div className="green-box">Historial <br/>Nominas</div>
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
export default Principaliniciosesion;
