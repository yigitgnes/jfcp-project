import React from "react";
import './Services.css';
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";


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
                <button className="s-button">Download CV</button>
                <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>
            </div>
            {/* right side */}
            <div className="cards">
                <div style={{left: '14rem'}}>
                    <Card
                        emoji={HeartEmoji}
                        heading={'Desing'}
                        detail={"Text will be here"}
                    />
                </div>
                <div style={{top: "12rem", left: "-4rem"}}>
                    <Card
                        emoji={Glasses}
                        heading={"Developer"}
                        detail={"Java, Spring, HTML5, React"}
                    />
                </div>
            </div>
        </div>
    )
}

export default Services