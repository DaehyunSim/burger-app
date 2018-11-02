import React, { Component } from 'react';

import Auxil from '../../HOC/Auxil';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';
import Modal from '../../Components/UI/Modal/Modal';
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary';
const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

class BurgerBuilder extends Component{
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    };

    render () {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return(
            <Auxil>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary ingredients={this.state.ingredients}/>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                    IngredientAdded={this.addIngredientHandler}
                    IngredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler}/>
                    
            </Auxil>
        );
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey]
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);

        this.setState({purchasable: sum > 0});
    }

    addIngredientHandler = (type) => {
        const updatedCount = this.state.ingredients[type] + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };

        updatedIngredients[type] = updatedCount;
        const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];

        this.setState({totalPrice: newPrice, ingredients:updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const updatedCount = this.state.ingredients[type] - 1;
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0) {
            return;
        }
        const updatedIngredients = {
            ...this.state.ingredients
        };

        updatedIngredients[type] = updatedCount;
        const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];

        this.setState({totalPrice:newPrice, ingredients:updatedIngredients})
        this.updatePurchaseState(updatedIngredients);

    }
}

export default BurgerBuilder;