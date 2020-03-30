import React from "react";
import axios from 'axios';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CocktailCard from '../CocktailCard/CocktailCard';

import classes from './PopularCocktails.module.css';

class PopularCocktails extends React.Component {

    state = {
        cocktails: []
    };

    componentDidMount() {
        axios.get('https://www.thecocktaildb.com/api/json/v2/9973533/randomselection.php\n')
            .then((response) => {
                this.setState({cocktails: response.data.drinks});
                console.log(response);
            });
    }

    render() {

        const list = this.state.cocktails.map(cocktail => {

            let ingredients = [];
            const propName = 'strIngredient';

            for (let i = 1; i <= 15; i++) {
                if (cocktail[propName + i]) {
                    ingredients.push(cocktail[propName + i])
                } else {
                    break;
                }
            }

            return (
                <Col key={cocktail.idDrink} xs={12} sm={6} className={classes.Col5 + ' mb-3'}>
                    <CocktailCard
                        ingredients={ingredients}
                        title={cocktail.strDrink}
                        image={cocktail.strDrinkThumb}
                        type={cocktail.strAlcoholic}/>
                </Col>
            )
        });

        return (
            <React.Fragment>
                <h1 className="text-center mb-5">Most Popular Cocktails</h1>
                <Row>
                    {list}
                </Row>
            </React.Fragment>
        );
    }
};

export default PopularCocktails;