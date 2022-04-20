import React from 'react'
import { Button } from '../button/button';
import { modalStyle } from './modal-style'

const Modal = (props) => {
    const classes = modalStyle();
    const {handleClick} = props;
  return (
    <div className={classes['modal-black-screen']}>
        <div className={classes['modal-container']}>
                <h2 className={classes['modal-container__title']}>Error al iniciar sesion</h2>
                <p className={classes['modal-container__text']}>Contraseña o usuario erróneo, por favor intente nuevamente.</p>
                <Button handleClick={handleClick} text="continuar" width="100%" height="5vh" radius='2.5rem' />
        </div>
    </div>
  )
}

export default Modal