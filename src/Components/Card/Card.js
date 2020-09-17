import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = (props) => {
    return (
        <div className="cards">
            <Link to={`/Details/${props.id}`}>
            <img src={props.img} alt=""/>
            </Link>
            <p>{props.name}</p>
        </div>
    );
};

export default Card;