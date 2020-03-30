import React from "react";

import classes from './IngredientsList.module.css';

const ingredientsList = (props) => {

    const ingrediensList = props.ingredients.map((ingredient, i, arr) => {
        return (
            <React.Fragment key={ingredient}>
                <a href="" className={classes.IngredientLink + ' text-muted'}>{ingredient}</a>
                {(arr.length !== (i + 1) ? ' / ' : '')}
            </React.Fragment>
        )
    });

    return (
        <React.Fragment>
            Ingridients: {ingrediensList}
        </React.Fragment>
    );
};

export default ingredientsList;