import React, { useState } from 'react';
import "./Liquidacion.css";

export function Liquidacion() {
    const [empleados, setEmpleados] = useState([]);

    function refreshPage() {
        window.location.reload();
    }

    function handleSubmit(e) {
        e.preventDefault();

        const empleado = {
            nombre: e.target.nombre.value,
            apellido: e.target.apellido.value,
            codigo: e.target.codigo.value,
            sueldo: e.target.sueldo.value,
            departamento: e.target.departamento.value,
            eps: e.target.eps.value,
        };

        setEmpleados([...empleados, empleado]);
        alert("Datos registrados correctamente");
    }

    return (
        <section>
            <h1>Liquidación</h1>
            <form onSubmit={handleSubmit}>
                <div className="contenedor1">
                    <h2 className="nombre-texto">Nombre del empleado:</h2>
                    <input type="text" name="nombre" className="nombre" />
                </div>
                <div className="contenedor1">
                    <h2 className="apellido-texto">Apellido del empleado:</h2>
                    <input type="text" name="apellido" className="apellido" />
                </div>
                <div className="contenedor4">
                    <h2 className="codigo-texto">Código del empleado:</h2>
                    <input type="number" name="codigo" className="codigo" />
                </div>
                <div className="contenedor5">
                    <h2 className="sueldo-texto">Sueldo bruto del empleado:</h2>
                    <input type="number" name="sueldo" className="sueldo" />
                </div>
                <div className="contenedor6">
                    <h2 className="departamento-texto">Departamento del empleado:</h2>
                    <input type="text" name="departamento" className="departamento" />
                </div>
                <div className="contenedor7">
                    <h2 className="eps-texto">EPS del empleado:</h2>
                    <input type="text" name="eps" className="eps" />
                </div>
                <div className="contenedor3">
                    <button type="submit" className="Generar">Generar liquidación</button>
                    <button type="button" onClick={refreshPage} className="Cancelar">Cancelar</button>
                </div>
            </form>

            <div>
                <h2>Tabla de empleados:</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Código</th>
                            <th>Sueldo</th>
                            <th>Departamento</th>
                            <th>EPS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {empleados.map((empleado, index) => (
                            <tr key={index}>
                                <td>{empleado.nombre}</td>
                                <td>{empleado.apellido}</td>
                                <td>{empleado.codigo}</td>
                                <td>{empleado.sueldo}</td>
                                <td>{empleado.departamento}</td>
                                <td>{empleado.eps}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default Liquidacion;