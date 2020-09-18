import React from 'react';
import './Booking.css';
import room1 from '../../images/room1.png';
import room2 from '../../images/room2.png';
import room3 from '../../images/room3.png';
import GoogleMap from '../Map/GoogleMap';


const Booking = () => {
    return (
        <div className="home">
            <div className="container">
                <div style={{ marginTop: '0', paddingTop: '3%' }} className="row">
                    <div className="col-sm-6">
                        <div className="row">
                            <div className="col-sm-6">
                                <img style={{ width: '200px' }} src={room1} alt="" />
                            </div>
                            <div className="col-sm-6">
                                <p><b>light bright airy stylish apt & safe peaceful Stay</b></p>
                                <p>4guest 2bedrooms 2baths</p>
                                <p>air conditioned kitchen</p>
                                <p> &#9734;4.9(20)    $34/night</p>
                            </div>
                        </div>
                        <div style={{ marginTop: '0', paddingTop: '0' }} className="row">
                            <div className="col-sm-6">
                                <img style={{ width: '200px' }} src={room2} alt="" />
                            </div>
                            <div className="col-sm-6">
                                <p><b>light bright airy stylish apt & safe peaceful Stay</b></p>
                                <p>4guest 2bedrooms 2baths</p>
                                <p>air conditioned kitchen</p>
                                <p> &#9734;4.9(20)    $34/night</p>
                            </div>
                        </div>
                        <div style={{ marginTop: '0', paddingTop: '0' }} className="row">
                            <div className="col-sm-6">
                                <img style={{ width: '200px' }} src={room3} alt="" />
                            </div>
                            <div className="col-sm-6">
                                <p><b>light bright airy stylish apt & safe peaceful Stay</b></p>
                                <p>4guest 2bedrooms 2baths</p>
                                <p>air conditioned kitchen</p>
                                <p> &#9734;4.9(20)    $34/night</p>
                            </div>
                        </div>
                    </div>
                    <div style={{ marginTop: '0', paddingTop: '5%' }} className=" col-sm-6">
                        <GoogleMap></GoogleMap>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;