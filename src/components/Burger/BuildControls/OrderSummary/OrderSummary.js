import React  from 'react';
import Button from '../../../UI/Button/Button';
import Aux from '../../../../hoc/Aux';
import PropTypes from 'prop-types';
const orderSummary= (props)=>{
    const ingredientSummary=Object.keys(props.ingredients)
    .map(igKey=>
    {
        return (
        <li key={igKey}>
            <span style={{ textTrasform:'capitalize' }}>{igKey}:</span> {props.ingredients[igKey]}
        </li>);
    } ); 
    return(   
            <Aux>    
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
            </Aux>
    )   
};
 orderSummary.propTypes={
    price:PropTypes.number
} 
export default orderSummary;