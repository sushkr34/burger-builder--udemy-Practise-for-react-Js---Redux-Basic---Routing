import React from 'react'
import Auxillary from '../../../hoc/Auxillary/Auxillary'
import Button from '../../UI/Button/Button'
const orderSummary = (props) =>{
    const ingredientSummary=Object.keys (props.ingredients)
    .map(igKey=> {
        return <li key={igKey}>
            <span style={{textTransform:"capitalize"}}>{igKey}</span >:{props.ingredients[igKey]}
            </li>
    })
    return (
        <Auxillary>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total price : {props.price.toFixed(2)}</strong></p>
            <p> Continue to checkout</p>
            <Button btnType="Danger" clicked={props.purcaseCanceled}>CANCEL</Button>
            <Button  btnType="Success" clicked={props.purchaseContinued}>Continue</Button>
        </Auxillary>
    )
   

};

export default orderSummary