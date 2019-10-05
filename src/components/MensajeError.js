import React from 'react';

const MensajeError = ({mensaje}) => {
    return ( 
        <p className="alert alert-danger error">{mensaje}</p>
     );
}
 
export default MensajeError;