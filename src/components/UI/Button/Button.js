import React from 'react';
import classes from './Button.module.css'
//classname is an array beacuse two type of styling is required 
//props passed should be string so .join is used to convert it into strung
const button =(props)=>(
    <button className={[classes.Button,classes[props.btnType]].join(' ')}
    onClick={props.clicked}>
        {props.children}
    </button>
);
export default button;