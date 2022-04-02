import React from 'react'
import img1 from "./img1.jpg"

const Resume = () => {
    return (
        <div className="portf" id="resume-main">
            <div className="resume1">
                <div className="headin">
                    <h2 className="res head1">Resume</h2>
                </div>
                <div className="bottom1">
                    <div className="left-portf">
                        <div className="wok-exp">
                            <h3 className="work">Work Experience</h3>

                            <p className="text-grad">Content Creator - Internship</p>
                            <span className="year1">2020-2021</span>
                            <p className="text-grad">(Glowworms Pvt. Ltd.)</p>
                        </div>
                        <div className="edu-det">
                            <h3 className="work">Education Details</h3>
                            <p className="text-grad">Graduation - B.Tech. (BMU)</p>
                            <span className="year1">2016-2020</span>
                            <br />
                        </div>
                    </div>
                    <div className="res-img"><img src={img1} alt="Laptop" className="portf-lap" /></div>
                </div>
            </div>
        </div>
    )
}

export default Resume