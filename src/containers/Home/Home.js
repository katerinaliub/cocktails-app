import React from "react";

import Container from 'react-bootstrap/Container';

import PopularCocktails from '../../components/Cocktail/PopularCocktails/PopularCocktails';
import IngredientsCarousel from '../../components/IngredientsCarousel/IngredientsCarousel';

class Home extends React.Component{

    render() {
        return(
          <React.Fragment>
              <div>Field for searching cocktails by name and category</div>
              <Container>
                <PopularCocktails/>
              </Container>
              <IngredientsCarousel/>

              <div>Choose category and route to search page</div>
              ...
          </React.Fragment>
        );
    }

}

export default Home;