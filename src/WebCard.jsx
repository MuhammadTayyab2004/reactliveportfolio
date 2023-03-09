import React from "react";
import { NavLink } from "react-router-dom";
// import SerImg from './image/Dark.jpg'

function WebCard(prop) {

    return (
        <>
            <div className="col-lg-4 col-md-6 col-10 mx-auto">
                <div className="card mb-5">
                    <img src={prop.imgsrc} className="card-img-top" alt="img" />
                    <div className="card-body">
                        <h5 className="card-title">{prop.title}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <NavLink to="/" className="btn btn-primary">Go somewhere</NavLink>
                    </div>
                </div>
            </div>

        </>
    )
}

export default WebCard;