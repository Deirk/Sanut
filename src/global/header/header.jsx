import clsx from 'clsx';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { headerStyle } from './header-style';

export const Header = () => {
  const classes = headerStyle();
  const location = useLocation();
  return (
    <div className={classes.header}>
      <img className={classes['title-container__img']} src="/content/img/logo/logo.svg" alt="" />
      <div className={classes.navigation__container}>
        <div className={clsx(classes.navigation__item, classes['navigation__item--border'])}>
          <a className={clsx(classes['header-container__a'], location.pathname === '/patients' && classes['header-container__a--active'])} href="/patients">Pacientes</a>
        </div>
        <div className={clsx(classes.navigation__item, classes['navigation__item--border'])}>
          <a className={clsx(classes['header-container__a'], location.pathname === '/reports' && classes['header-container__a--active'])} href="/reports">Reportes</a>
        </div>
        <div className={clsx(classes.navigation__item, classes['navigation__item--border'])}>
          <a className={clsx(classes['header-container__a'], location.pathname === '/chats' && classes['header-container__a--active'])} href="/chats">Chats</a>
        </div>
        <div className={clsx(classes.navigation__item)}>
          <a className={clsx(classes['header-container__a'], location.pathname === '/notifications' && classes['header-container__a--active'])} href="/notifications">Notificaciones</a>
        </div>
      </div>
      <h3>Dr. Lina Valencia</h3>
    </div>
  );
};
