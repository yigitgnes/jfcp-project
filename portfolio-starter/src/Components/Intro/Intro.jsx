import React from "react"
import "./Intro.css"
import Github from "../../img/github.png"
import LinkedIn from "../../img/linkedin.png"
import Instagram from "../../img/instagram.png"

const Intro = () => {
    return (
        <div className="Intro">
            <div className="i-left">
                <div className="i-name">
                    <span>Hy! I Am</span>
                    <span>Yigit Gunes</span>
                    <span>FullStack Developer without experience but high
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

                i am right side

            </div>
        </div>
    )
}
export default Intro