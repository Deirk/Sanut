import Radio from '@mui/material/Radio';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fake_account } from '../../config/const';
import { Button } from '../../global/button/button';
import { CommonInput } from '../../global/input/input';
import Modal from '../../global/modal/modal';
import { welcomeStyle } from './welcome-style';

export const Welcome = () => {
  const classes = welcomeStyle();
  const [selectedValue, setSelectedValue] = React.useState('');
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: 'succesButton',
    inputProps: { 'aria-label': item },
  });

  const handleChangeUsername = (e) => {
    const {target : {value}} = e;
    setUsername(value)
  }

  const handleChangePassword = (e) => {
    const {target : {value}} = e;
    setPassword(value)
  }

  const handleVerifyAccount = () => {
    if (username === fake_account.userName && password === fake_account.password) {
      navigate('/patients');
    } else {
      setIsOpen(true)
    }
  }

  const handleClose = () => {
    setIsOpen(false);
  };
  
  return (
    <>
    {isOpen && <Modal handleClick={handleClose}/>}
      <div className={classes.welcome}>
        <div className={classes.welcome__container}>
          <div className={classes['welcome__title-container']}>
            <h1 className={classes['title-container__title']}>Bienvenido a</h1>
            <img className={classes['title-container__img']} src="/content/img/logo/logo.svg" alt="" />
          </div>
          <div className={classes['welcome__loyalty-container']}>
            <p className={classes['loyalty-container__p']}>¡Que gusto verte!</p>
            <h4 className={classes['loyalty-container__h4']}>Accede a tu cuenta</h4>
          </div>
          <div className={classes['welcome__input-container']}>
            <label className={classes['input-container__label']}>Usuario</label>
            <CommonInput handleChange={handleChangeUsername} type='text' placeholder="correo.ejemplo@gmail.com" width="90%" height="6vh" radius='5px' />
          </div>
          <div className={classes['welcome__input-container']}>
            <label className={classes['input-container__label']}>Usuario</label>
            <CommonInput handleChange={handleChangePassword} type='password' placeholder="************" width="90%" height="6vh" radius='5px' />
          </div>
          <div className={classes['password-reminder__container']}>
            <div className={classes['input-radio__container']}>
              <Radio {...controlProps('saved')} color="success" size='0.75rem' />
              <label>Recordar</label>
            </div>
            <a className={classes['password-reminder__a']} href="/"> Se te olvido la contraseña?</a>
          </div>
          <div className={classes.btn__container}>
            <Button handleClick={handleVerifyAccount} text="Ingresar" width="80%" height="5vh" radius='2.5rem' />
          </div>
        </div>
      </div>
    </>
  )
};
