import React from "react"
import "./Intro.css"
import Github from "../../img/github.png"
import LinkedIn from "../../img/linkedin.png"
import Instagram from "../../img/instagram.png"
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesemoji from '../../img/glassesimoji.png'
import FloatingDiv from "../FloatingDiv/FloatingDiv";
const Intro = () => {
    return (
        <div className="Intro">
            <div className="i-left">
                <div className="i-name">
                    <span>Hy! I Am</span>
                    <span>Yigit Gunes</span>
                    <span>Full-Stack Developer without experience but high
                    level of ambition in web designing
                    and development, producing the qualified work</span>
                </div>
                <button className="button i-button">Hire me</button>
                <div className="i-icons">
                    <img src={Github} alt="" />
                    <img src={LinkedIn} alt="" />
                    <img src={Instagram} alt="" />
                </div>

            </div>

            <div className="i-right">

                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={boy} alt="" />
                <img src={glassesemoji} alt="" />
                <div style={{top: '-4%', left:'68%'}}>
                    <FloatingDiv image={Crown} txt1='Full-Stack' txt2='Developer'/>
                </div>
                <div style={{top: '18rem', left:'0rem'}}>
                    <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award' />
                </div>
                <div className='blur' style={{background: "rgb(238 210 255)"}}></div>
            </div>
        </div>
    )
}
export default Intro