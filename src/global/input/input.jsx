import React from 'react'
import { commonInputStyle } from './input-style';

export const CommonInput = (props) => {
    const classes = commonInputStyle();
    const {placeholder, type, width, height, radius, handleChange} = props;

  return (
    <input className={classes.common__input} type={type} onChange={handleChange} style={{width: width, height: height, borderRadius: radius}} placeholder={placeholder}></input>
  )
}