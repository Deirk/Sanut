import React from 'react'
import { commonButtonStyle } from './button-style'

export const Button = (props) => {
    const classes = commonButtonStyle();
    const {text, width, height, radius, handleClick} = props;

  return (
    <button className={classes.common__button} style={{width: width, height: height, borderRadius: radius}} onClick={handleClick}>{text}</button>
  )
}
