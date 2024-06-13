import { Link } from "react-router-dom";
import "./faq.css"
export function FAQ(){
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

        <h1 className="section-title">¿Quiénes somos?</h1>
        <h3 className="section-content">
            Somos Nominaria, una empresa dedicada a proporcionar soluciones innovadoras y eficientes para la gestión de nóminas.
            Nuestro equipo está compuesto por profesionales con amplia experiencia en recursos humanos, finanzas y tecnología,
            comprometidos con ofrecer un servicio de alta calidad a nuestros clientes.
        </h3>

        <h1 className="section-title">¿Cuáles son nuestros servicios?</h1>
        <h3 className="section-content">
            En Nominaria, ofrecemos una amplia gama de servicios diseñados para cubrir todas tus necesidades de gestión de nóminas:
            <ul>
                <li>Gestión de Nóminas</li>
                <li>Registro de Empleados</li>
                <li>Cálculo de Impuestos</li>
                <li>Generación de Recibos de Nómina</li>
                <li>Reportes y Análisis</li>
                <li>Soporte y Asistencia</li>
                <li>Seguridad y Confidencialidad</li>
            </ul>
        </h3>

        <div className="footer">
            <h4 className="contactenos">¡Contáctenos!</h4>
            <h4 className="tel">Teléfono: 3012621770 </h4>
            <h4 className="correo">Correo electrónico: nominariacol@gmail.com </h4>
            <h4 className="dir">Dirección: cra20B #54-70 circular sur </h4>
            <h4 className="Redes">Redes sociales</h4>
            <img src="./imagenes-nominaria/linea.png" alt="linea" className="linea"/>
            <div className="logos">
                <img src="./imagenes-nominaria/facebook.jpg" alt="facebook" className="facebook"/>
                <img src="./imagenes-nominaria/instagram.jpg" alt="instagram" className="instagram"/>
                <img src="./imagenes-nominaria/twiter.jpg" alt="twiter" className="twiter"/>
            </div>
            <h4 className="facebook-text">Facebook: nominariaCol</h4>
            <h4 className="instagram-text">Instagram: nominaria_col</h4>
            <h4 className="twiter-text">X: @nominariaColSA</h4>
        </div>
    </section>
    )
}
export default FAQ