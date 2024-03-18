export function Registro(){
    return(
        <section>
        <h1>Registro</h1>
        <div className="contenedor">
            <h2 className="nombre-texto">Nombre</h2>
            <input
            type="text"
            name="nombre"
            className="nombre">
            </input>
         </div>
         <div className="contenedor1">
            <h2 className="apellido-texto">Apellido</h2>
            <input
            type="text"
            name="apellido"
            className="apellido">
            </input>
         </div>
         <div className="contenedor4">
            <h2 className="correo-texto">Correo</h2>
            <input
            type="text"
            name="correo"
            className="correo">
            </input>
         </div>
         <div className="contenedor5">
            <h2 className="contraseña-texto">Contraseña</h2>
            <input
            type="text"
            name="contraseña"
            className="contraseña">
            </input>
         </div>
         <div className="contenedor6">
            <h2 className="telefono-texto">Telefono</h2>
            <input
            type="number"
            name="telefono"
            className="telefono">
            </input>
         </div>
        <div className="contenedor3">
         <button className="inicio">Inicio</button>
         <button className="Cancelar">Cancelar</button>
         </div>


        </section>
    );
};
export default Registro