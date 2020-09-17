import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import EventNoteIcon from '@material-ui/icons/EventNote';
import './Details.css';

const Details = () => {
    const {id}= useParams();
    const card = [
        {
            "id":"01",
            "name": "Cox's Bazar",
            "image": "https://res.cloudinary.com/hb007/image/upload/v1600275581/Sajek_a2jbz3.png",
            "details":"Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos cupiditate, sed quo veniam quas minima esse eaque praesentium architecto culpa. Vero,Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos cupiditate, sed quo veniam quas minima esse eaque praesentium architecto culpa. Vero, COX'S BAZAR?"
        },
        {
            "id":"02",
            "name": "Sreemangal",
            "image": "https://res.cloudinary.com/hb007/image/upload/v1600275591/Sreemongol_srqmuv.png",
            "details":"Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos cupiditate, sed quo veniam quas minima esse eaque praesentium architecto culpa. Vero,Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos cupiditate, sed quo veniam quas minima esse eaque praesentium architecto culpa. Vero, SREEMANGAL?"
        },
        {
            "id":"03",
            "name": "Sundarban",
            "image": "https://res.cloudinary.com/hb007/image/upload/v1600275601/sundorbon_sb3tac.png",
            "details":"Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos cupiditate, sed quo veniam quas minima esse eaque praesentium architecto culpa. Vero,Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos cupiditate, sed quo veniam quas minima esse eaque praesentium architecto culpa. Vero, SUNDARBAN?"
        }
    ];
    return (
        <div className="home">
        <div className="container row">
            <div className="description col-sm-8">
                {
                    (id == "1") ? <h1 style={{color:"white"}}>{card[0].name}</h1> : null
                }
                {
                    (id == "2") ? <h1 style={{color:"white"}}>{card[1].name}</h1>  : null
                }
                {
                    (id == "3") ? <h1 style={{color:"white"}}>{card[2].name}</h1>  : null
                }
                {
                    (id == "1") ? <p style={{color:"white"}}>{card[0].details}</p> : null
                }
                {
                    (id == "2") ? <p style={{color:"white"}}>{card[1].details}</p>  : null
                }
                {
                    (id == "3") ? <p style={{color:"white"}}>{card[2].details}</p>  : null
                }
            </div>
            <div className="book col-sm-4">
                <h6>Origin:</h6>
                <h4>Dhaka</h4>
                <h6>Destinaton:</h6>
                {
                    (id == "1") ? <h4>{card[0].name}</h4> : null
                }
                {
                    (id == "2") ? <h4>{card[1].name}</h4>  : null
                }
                {
                    (id == "3") ? <h4>{card[2].name}</h4>  : null
                }
                <div className="row">
                    <div className="col-sm-6">
                    <h6>FROM:</h6>
                    <h4>01/09/20 <EventNoteIcon/></h4>
                    </div>
                    <div className="col-sm-6">
                    <h6>To:</h6>
                    <h4>12/09/20 <EventNoteIcon/></h4>
                    </div>
                </div> <br/>
                <Link to="/booking"><Button variant="warning">Start Booking</Button></Link>
            </div>
        </div>
        </div>
    );
};

export default Details;