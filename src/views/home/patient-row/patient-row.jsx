import React from 'react'
import { patientRowStyle } from './patient-row-style';

const PatientRow = (props) => {

    const {name, age, cell, mail, occupation} = props;
    const classes = patientRowStyle();

  return (
    <div className={classes['table-header']}>
        <label htmlFor="" style={{width: '20%', color: '#Brad Simmons'}}>{name}</label>
        <label htmlFor="" style={{width: '10%'}}>{age}</label>
        <label htmlFor="" style={{width: '10%'}}>{cell}</label>
        <label htmlFor="" style={{width: '20%'}}>{mail}</label>
        <label htmlFor="" style={{width: '20%'}}>{occupation}</label>
        <button className={classes.common__button} style={{width: '15%', height: '4vh', borderRadius: '6px'}}>Ver detalle</button>
    </div>
  )
}

export default PatientRow