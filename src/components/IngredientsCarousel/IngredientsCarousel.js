import React from 'react';

import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import Slider from "react-slick";

import axios from '../../axios';

import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import CardImageWithBadge from '../Utilities/CardImageWithBadge/CardImageWithBadge';

class IngredientsCarousel extends React.Component {

    state = {
        ingredients: [],
        loading: false
    };

    componentDidMount() {
        this.loadIngredients();
    }

    loadIngredients = () => {
        this.setState({loading: true});
        axios.get('/list.php?i=list')
            .then((response) => {
                this.setState({
                    ingredients: response.data.drinks,
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
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 8,
            slidesToScroll: 1,
            initialSlide: 0,
            arrows: false,
            autoplay: true,
            focusOnSelect: true
        };

        //show only 20 first ingredients
        const list = this.state.ingredients.slice(0, 20).map((ingredient, i) => (
            <div key={ingredient.strIngredient1 + i}>
                <CardImageWithBadge
                    href="#"
                    src={'https://www.thecocktaildb.com/images/ingredients/' + ingredient.strIngredient1 + '-Medium.png'}
                    alt={ingredient.strIngredient1}
                    variant="primary"
                    badge={ingredient.strIngredient1} />
            </div>
        ));

        let content = (
            <Slider {...settings}>
                {list}
            </Slider>
        );

        if (this.state.loading) {
            content = (
                <Spinner animation="border" role="status" className="d-block mx-auto">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            );
        }

        return (
            <Container fluid>
                <h1 className="text-center mb-5">Ingredients</h1>
                {content}
            </Container>
        );
    }
}

export default withErrorHandler(IngredientsCarousel, axios);