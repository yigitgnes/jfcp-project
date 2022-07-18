import React from "react";
import './Services.css';
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";


const Services = () => {
    return (
        <div className="services">
            {/* left side */}
            <div className="awesome">
                <span>My Awesome</span>
                <span>Services</span>
                <spane>
                    Text will be here but i dont know what should i write here for nice beginning
                    <br/>
                    be here
                </spane>
                <button className="button s-button">Download CV</button>
                <div className="blur s-blur1" style={{background:"#ABF1FF94"}}></div></div>
            {/* right side */}
            <div className="cards">
                I am the right side
            </div>
        </div>
    )
}

export default Services