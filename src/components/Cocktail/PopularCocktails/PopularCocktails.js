import React from "react";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from "react-bootstrap/Spinner";

import axios from '../../../axios';

import withErrorHandler from "../../../hoc/withErrorHandler/withErrorHandler";
import CocktailCard from '../CocktailCard/CocktailCard';

import classes from './PopularCocktails.module.css';

class PopularCocktails extends React.Component {

    state = {
        cocktails: [],
        loading: false
    };

    componentDidMount() {
        this.loadCocktails();
    }

    loadCocktails = () => {
        this.setState({loading: true});
        axios.get('/randomselection.php')
            .then((response) => {
                this.setState({
                    cocktails: response.data.drinks,
                    loading: false
                });
            })
            .catch(error => {
                this.setState({
                    loading: false
                });
            });
    };

    render() {
        let list = this.state.cocktails.map(cocktail => {
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

        if (this.state.loading) {
            list = (
                <Spinner animation="border" role="status" className="mx-auto">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            );
        }

        return (
            <React.Fragment>
                <h1 className="text-center mb-5">Most Popular Cocktails</h1>
                <Row>
                    {list}
                </Row>
            </React.Fragment>
        );
    }
}

export default withErrorHandler(PopularCocktails, axios);