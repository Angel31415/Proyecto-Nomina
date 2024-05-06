import { Link } from "react-router-dom";
import "./helpers/Empleados.css";
export function Empleados(){
    return(
        <section>
        <nav className="navbar">
        <div className="navbar-title">Nominaria</div>
        <div className="navbar-links">
        <Link to="/" className="navbar-link">Inicio</Link>
          <Link to="/Inicio-Sesion" className="navbar-link">Inicio de Sesión</Link>
          <Link to="Rregistro" className="navbar-link">Registro</Link> 
        </div>
      </nav>
      <h1 className="Empleados">Empleados</h1>

      <div class="container">
    <button className="left">Añadir empleado</button>
    <button className="center">Editar contenido</button>
    <button className="right">Eliminar empleado</button>
    </div>
    
    <div class="search-container">
  <img src="./imagenes-nomidanira/lupa.png" alt="lupa" className="lupa"></img>
  <input type="text" name="Buscar" placeholder="Buscar" className="Buscar"></input>
</div>
    <div className="contenedor">
    <table>
  <tr>
    <th>Cod_empleado</th>
    <th>Nombre</th>
    <th>Apellido</th>
    <th>Sueldo_bruto</th>
    <th>Bonos</th>
    <th>h_extras</th>
    <th>val_hora</th>
    <th>Departamento</th>
    <th>Cargo</th>
    <th>Pension</th>
    <th>Seguro</th>
    <th>EPS</th>
    <th>Nro_seguro</th>
    <th>Deducciones</th>
    <th>sal_neto</th>
  </tr>
  </table>
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
    );
};
export default Empleados