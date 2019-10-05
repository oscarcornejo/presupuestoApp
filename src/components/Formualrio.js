import React, {useState} from 'react';
import MensajeError from './MensajeError';
import shortid from 'shortid';

const Formulario = (props) => {
    
    const { guardarGasto, guardarCrearGasto } = props;

    const [nombreGasto, guardarNombreGasto] = useState('');
    const [cantidadGasto, guardarCantidadGasto] = useState(0);
    const [error, guardarError] = useState(false);
    
    // SE AGREGA EL GASTO
    const agregarGasto = (e) => {
        e.preventDefault();

        // VALIDAR CAMPOS
        if(cantidadGasto < 1 || isNaN(cantidadGasto) || cantidadGasto === null || nombreGasto === '') {
            guardarError(true);
            return;
        }

        
        // CONTRUIR OBJETO DE GASTO
        const gasto = {
            nombreGasto,
            cantidadGasto,
            id: shortid
        }
        // PASAR EL GASTO AL COMPONENTE PRINCIPAL
        guardarGasto(gasto);
        guardarCrearGasto(true);

        // QUITA ALERTA
        guardarError(false);

        // RESETEAR EL FORM
        guardarNombreGasto('');
        guardarCantidadGasto('');
    }

    return ( 
        <form onSubmit={agregarGasto}>
            <h2>Agrega tus Gastos</h2>

            {error ? <MensajeError mensaje="*Todos los campos son obligatorios" /> : null}

            <div className="campo">
                <label>Nombre Gasto</label>
                <input type="text" className="u-full-width" placeholder="Ej: Transporte" onChange={(e) => guardarNombreGasto(e.target.value)} value={nombreGasto} />
            </div>

            <div className="campo">
                <label>Cantidad Gasto</label>
                <input type="number" className="u-full-width" placeholder="Ej: 100" onChange={(e) => guardarCantidadGasto(parseInt(e.target.value, 10))} value={cantidadGasto} />
            </div>

            <button type="submit" className="button-primary u-full-width">Agregar Gasto</button>

        </form>
     );
}
 
export default Formulario;