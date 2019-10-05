import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formualrio';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';

function App() {

  const titulo = 'Gasto Semanal';

  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [preguntaPresupuesto, guardarPreguntaPresupuesto] = useState(true);
  const [crearGasto, guardarCrearGasto] = useState(false);
  const [gasto, guardarGasto] = useState({});
  const [gastos, guardarGastos] = useState([]);
  
  useEffect(() => {
    if(crearGasto) {
      const listadoGastos = [...gastos, gasto];
      guardarGastos(listadoGastos);

      // RESTAR EL PRESUPUESTO
      const presupuestoRestante = restante - gasto.cantidad;
      guardarRestante(presupuestoRestante);

      // Una vez se agrega el gasto, seteamos nuevamente a false
      guardarCrearGasto(false);
    }
  }, [crearGasto, gastos, gasto, restante]);

  // ** OPCION PARA PASAR PARÁMETROS DESDE EL HIJO AL PADRE ** //
  // const guardarPresupuestoSemanal = (data) => {
  //   const nuevoPresuesto ={ 
  //     ...presupuesto,
  //     data
  //   }
  //   guardarPresupuesto(nuevoPresuesto);
  // }

  return (
    <div className="App container">
      <Header titulo={titulo} />
        <div className="contenido-principal contenido">

         {/* guardarPresupuesto es una funcion por eso se pasa como props sin declarar */}
          {/* <Pregunta guardarPresupuesto={guardarPresupuesto} guardarPreguntaPresupuesto={guardarPreguntaPresupuesto} /> */}
          {/* OPCION PARA PASAR PARÁMETROS DESDE EL HIJO AL PADRE */}
          {/* <Pregunta guardarPresupuestoSemanal={guardarPresupuestoSemanal} /> */}

        {
          (preguntaPresupuesto) 
          ? <Pregunta 
              guardarPresupuesto={guardarPresupuesto} 
              guardarPreguntaPresupuesto={guardarPreguntaPresupuesto}
              guardarRestante={guardarRestante} />
          : (
            <div className="row">
              <div className="one-half column">
                <Formulario 
                  guardarGasto={guardarGasto} 
                  guardarCrearGasto={guardarCrearGasto} />
              </div>

              <div className="one-half column">
                  <Listado  gastos={gastos} />

                  <ControlPresupuesto presupuesto={presupuesto} restante={restante} />
              </div>
            </div>
          )
        }

        </div>
    </div>
  );
}

export default App;
