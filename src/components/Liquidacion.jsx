export function Liquidacion(){
    return(
        <section>
        <h1>Liquidación</h1>
        <div className="contenedor">
            <h2 className="nombre-texto">Nombre del empleado:</h2>
            <input
            type="text"
            name="nombre"
            className="nombre">
            </input>
         </div>
         <div className="contenedor1">
            <h2 className="apellido-texto">Apellido del empleado:</h2>
            <input
            type="text"
            name="apellido"
            className="apellido">
            </input>
         </div>
         <div className="contenedor4">
            <h2 className="codigo-texto">Codigo del empleado:</h2>
            <input
            type="number"
            name="codigo"
            className="codigo">
            </input>
         </div>
         <div className="contenedor5">
            <h2 className="sueldo-texto">Sueldo bruto del empleado:</h2>
            <input
            type="number"
            name="sueldo"
            className="sueldo">
            </input>
         </div>
         <div className="contenedor6">
            <h2 className="departamento-texto">Departamento del empleado:</h2>
            <input
            type="text"
            name="departamento"
            className="departamento">
            </input>
        </div>
            <div className="contenedor7">
            <h2 className="eps-texto">EPS del empleado:</h2>
            <input
            type="text"
            name="eps"
            className="eps">
            </input>
         </div>
        <div className="contenedor3">
         <button className="Generar">Generar liquidación</button>
         <button className="Cancelar">Cancelar</button>
         </div>

         <div className="footer">
               
               <h4 className="contactenos">¡Contactenos!</h4>
                <h4 className="tel">Telefono: 3012621770 </h4>
                <h4 className="correo">Correo electronico: nominariacol@gmail.com </h4>
                <h4 className="dir">Dirección: cra20B #54-70 circular sur </h4>
               <h4 className="Redes">Redes sociales</h4>
               <img src="./img/linea.png" alt="linea"  className="linea"/>
               <div className="logos">
               <img src="./img/facebook.jpg" alt="facebook"  className="facebook"/>
               <img src="./img/instagram.jpg" alt="instagram"  className="instagram"/>
               <img src="./img/twiter.jpg" alt="twiter"  className="twiter"/>
               </div>
               <h4 className="facebook-text">facebook: nominariaCol</h4>
               <h4 className="instagram-text">Instagram: nominaria_col</h4>
               <h4 className="twiter-text">X: @nominariaColSA</h4>
           </div>
        </section>
    );
};
export default Liquidacion;