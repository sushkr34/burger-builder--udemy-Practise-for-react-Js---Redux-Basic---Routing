import React from 'react';
import classes from './Burger.module.css'
import BurgerIngredient from './Burgeringrident/Burgeringredient';
const burger=(props)=>{
    //transforming object into array (object is property of javascript)
    // [...Array ] is property of javascript (creating new array )
    //reduce flatens the array so that we can check if length of aray is 0 or not 
    //reduce takes func takes two value preveios value and current value
    // arr is previous value , el is current valuue, [] is the inital array
    let transformedIngredients=Object.keys(props.ingredients)
     .map(igKey => {
         return [...Array(props.ingredients[igKey])].map((_,i)=>{
            return  <BurgerIngredient key={igKey +i} type={igKey}/>
         });
     })
     .reduce((arr,el)=>{
         return arr.concat(el)
     },[]);
     if(transformedIngredients.length===0){
         transformedIngredients=<p>Please start adding igrdients</p>
     }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient  type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>

        </div>
    );
}

export default burger;