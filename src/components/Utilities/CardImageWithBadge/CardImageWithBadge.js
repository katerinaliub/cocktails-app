import React from "react";
import Badge from "react-bootstrap/Badge";

import classes from "./CardImageWithBadge.module.css";


const cardImageWithBadge = (props) => {
    return (
        <a href={props.src} className={classes.Link + ' rounded'}>
            <img src={props.src}
                 alt={props.alt}
                 className={classes.Image + ' img-fluid card-img'} />
            <Badge variant={props.variant} className={classes.Badge}>{props.badge}</Badge>
        </a>
    );
};

export default cardImageWithBadge;