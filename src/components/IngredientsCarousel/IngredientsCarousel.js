import React from 'react';
import axios from 'axios';

import Container from "react-bootstrap/Container";
import Slider from "react-slick";

import CardImageWithBadge from '../Utilities/CardImageWithBadge/CardImageWithBadge';

class ingredientsCarousel extends React.Component {

    state = {
        ingredients: []
    }

    componentDidMount() {
        axios.get('https://www.thecocktaildb.com/api/json/v2/9973533/list.php?i=list')
            .then((response) => {
                this.setState({ingredients: response.data.drinks});
            });
    }

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

        return (
            <Container fluid>
                <h1 className="text-center mb-5">Ingredients</h1>
                <Slider {...settings}>
                    {list}
                </Slider>
            </Container>
        );
    }
};

export default ingredientsCarousel;