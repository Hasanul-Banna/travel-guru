import React from 'react';
import './Home.css';
import { Button } from 'react-bootstrap';
import Card from '../Card/Card';
import { Link } from 'react-router-dom';

const Home = () => {
    const card = [
        {
            "id":"1",
            "name": "Cox's Bazar",
            "image": "https://res.cloudinary.com/hb007/image/upload/v1600275581/Sajek_a2jbz3.png",
            "details":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, repudiandae?"
        },
        {
            "id":"2",
            "name": "Sreemangal",
            "image": "https://res.cloudinary.com/hb007/image/upload/v1600275591/Sreemongol_srqmuv.png",
            "details":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, repudiandae?"
        },
        {
            "id":"3",
            "name": "Sundarban",
            "image": "https://res.cloudinary.com/hb007/image/upload/v1600275601/sundorbon_sb3tac.png",
            "details":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, repudiandae?"
        }
    ];
    return (
        <div className="home">
            <div className="header-content container">
                <h1>COX'S BAZAR</h1>
                <p>Cox's Bazar is the prime beach and tourist town in Bangladesh, situated alongside the beach of the Bay of Bengal, reachable through motor transport alongside the wavy water . This town is situated in the Chittagong Division in south-eastern Bangladesh.</p>
                <Link to="/booking"><Button variant="warning">Book Now </Button></Link>
            </div>
            <div className="Card-holder container">
                {
                    card.map(x => <Card id={x.id} name={x.name} img={x.image} ></Card>)
                }
            </div>
        </div>
    );
};

export default Home;