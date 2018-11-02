import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'},
]

const buildControls = (props) =>(
    <div className={classes.BuildControls}> 
        {controls.map(ctrl => (
            <BuildControl 
                key={ctrl.label} 
                label={ctrl.label}
                added={() => props.IngredientAdded(ctrl.type)}
                removed={() => props.IngredientRemoved(ctrl.type)}
                calculate={() => props.CalculatePrice(ctrl.type)}
                disabled={props.disabled[ctrl.type]}/>
        ))}
        <p>${props.totalPrice.toFixed(2)}</p>
    </div>
);

export default buildControls;