import React, { Fragment, useState } from 'react';
import MensajeError from './MensajeError';

const Pregunta = (props) => {

    // const {guardarPresupuestoSemanal} = props;
    const {guardarPresupuesto, guardarPreguntaPresupuesto, guardarRestante} = props;

    // SE DEFINE EL STATE
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);

    const handleChange = (e) => {
        console.log(e);
        guardarCantidad(e.target.name = parseInt(e.target.value, 10));
    }

    // VALIDAR ELPRESUPUESTO
    const agregarPresupuesto = (e) => {
        e.preventDefault();

        // Validar Campos
        if(cantidad < 1 || isNaN(cantidad) || cantidad === null ) {
            guardarError(true);
            return;
        }

        // Si los campos están correctos
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        guardarPreguntaPresupuesto(false);
        guardarError(false);

    }

    return (
        <Fragment> 
            <h2>Ingresar Presupuesto</h2>

            {error ? <MensajeError mensaje='EL presupuesto es Incorrecto' /> : null}

            <form onSubmit={agregarPresupuesto}>
                <input type="text" className="u-full-width" placeholder="Ej: 250000" onChange={handleChange} />

                <input type="submit" className="button-primary u-full-width" value="Definir Presupuesto" />
            </form>
        </Fragment>
     );
}
 
export default Pregunta;