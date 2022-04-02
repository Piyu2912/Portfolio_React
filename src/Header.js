import React from 'react'
import './style.css'

const Header = () => {
    return (
        <nav className="header">
            <div className="left">
                <text>PY.</text>
            </div>
            <input type="checkbox" id="check" />
                <label for="check">
                    <i class="fas fa-bars" id="btn"></i>
                    <i class="fas fa-times" id="cancel"></i>
                </label>
                <div class="sidebar">
                    <ul>
                        <li><a href="#about-me" className="style about-head">About</a></li>
                        <li><a href="#portfolio" className="style about-head">Portfolio</a></li>
                        <li><a href="#resume-main" className="style res">Resume</a></li>
                        <li><a href="#contact-main" className="style contact">Contact</a></li>
                    </ul>
                </div>
                <div className="right">
                    <a href="#about-me"><div className="style about-head">About</div></a>
                    <a href="#portfolio"><div className="style portf-head">Portfolio</div></a>
                    <a href="#resume-main"><div className="style res">Resume</div></a>
                    <a href="#contact-main"><div className="style contact">Contact</div></a>
                    {/* <button onclick="dark()" class="toggle1">Go Dark</button> */}
                </div>
        </nav>
    )
}

export default Header