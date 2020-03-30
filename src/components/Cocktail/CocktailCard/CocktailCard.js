import React from "react";

import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

import IngredientsList from './IngredienstList/IngredienstList';
import CardImageWithBadge from '../../Utilities/CardImageWithBadge/CardImageWithBadge';

import classes from './CocktailCard.module.css';

const cocktailCard = (props) => {

    let badgeType = null;

    switch (props.type.toLowerCase()) {
        case 'alcoholic':
            badgeType = 'primary';
            break;
        case 'non alcoholic':
            badgeType = 'success';
            break;
        case 'optional alcohol':
            badgeType = 'info';
            break;
        default:
            badgeType = 'primary';
    }

    const badge = <Badge variant={badgeType} className={classes.CardBadge}>{props.type}</Badge>;

    return (
        <Card className={classes.CocktailCard}>

            <CardImageWithBadge
                href="#"
                alt={props.title}
                src={props.image}
                variant={badgeType}
                badge={props.type}/>

            {/*<a href="#" className={classes.CardLink + ' rounded'}>*/}
            {/*    {badge}*/}
            {/*    <Card.Img src={props.image} className={classes.CardImage + ' rounded'} />*/}
            {/*</a>*/}

            <Card.Body className={classes.CardBody}>
                <a href="" className={classes.CardTitle}><Card.Title>{props.title}</Card.Title></a>
                <Card.Subtitle className="mb-2 text-muted">
                    <IngredientsList ingredients={props.ingredients}/>
                </Card.Subtitle>
            </Card.Body>
        </Card>

    )
};

export default cocktailCard;