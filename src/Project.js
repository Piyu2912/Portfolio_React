import React from 'react'
import imgport1 from "./img-port1.png"
import imgport2 from "./img-port2.png"
import imgport3 from "./img-port3.png"
import imgport4 from "./img-port4.png"

const Project = () => {
    return (
        <div className="port-main" id="portfolio">
            <div class="top1">
                <h2 className="head1 port1">My Portfolio</h2>
            </div>
            <div className="port-card">
                <div className="port-img1"><img src={imgport1} alt="Imgae1" className="port-image" /></div>
                <div className="port-img1"><img src={imgport2} alt="Imgae1" className="port-image" /></div>
                <div className="port-img1"><img src={imgport3} alt="Imgae1" className="port-image" /></div>
                <div className="port-img1"><img src={imgport4} alt="Imgae1" className="port-image" /></div>
            </div>
        </div>
    )
}

export default Project