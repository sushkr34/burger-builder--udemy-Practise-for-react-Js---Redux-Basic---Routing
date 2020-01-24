import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import classes from './SideDrawer.module.css';
import Auxillary from '../../../hoc/Auxillary/Auxillary';
import Backdrop from '../../UI/Backdrop/Backdrop';


const sideDrawer = (props) => {
let attachedClasses =[classes.SideDrawer,classes.Close]
if(props.open){
    attachedClasses=[classes.SideDrawer,classes.Open]
}

    return (
        <Auxillary>
            <Backdrop show={props.open} clicked={props.closed}/>
        <div className={attachedClasses.join(' ')}>
            <div className={classes.Logo}> 
                <Logo />
             </div>
            <nav >
                <NavigationItems></NavigationItems>
            </nav>
        </div>
        </Auxillary>
    );
}

export default sideDrawer;