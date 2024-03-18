
export function Iniciosesion(){
    return(
        <section>
        <h1>Inicio Sesión</h1>
        <div className="contenedor">
            <h2 className="correo-texto">Correo</h2>
            <input
            type="text"
            name="correo"
            className="correo">
            </input>
         </div>
         <div className="contenedor1">
            <h2 className="contraseña-texto">Contraseña</h2>
            <input
            type="text"
            name="contraseña"
            className="contraseña">
            </input>
         </div>

        <div className="contenedor3">
         <button className="inicio">Inicio</button>
         <button className="Cancelar">Cancelar</button>
         </div>
        </section>
    );
};
export default Iniciosesion