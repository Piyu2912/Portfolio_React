import React from 'react'
import work from "./work.gif"

const About = () => {
  return (
    <div className="about1" id="about-me">
                <div className="left1">
                    <img src={work} alt="Man" className="lap1" /></div>
                <div className="right1">
                    <h2 className="head1">ABOUT ME</h2>
                    <div className="text1">
                        <p>
                            I'm a web designer & front-end developer and entering the industry with
                            high goals. I'm intrested in all kinds of visual communication, but my
                            major focus always resides on designing web, mobile & tab interfaces. I
                            also learned about web development.
                        </p>
                        <p>
                            Turning complex problems into simple, intutive and beautiful designs is
                            my main interest. If I'm not on my laptop, you can find me gardening or
                            travelling to mountains.
                        </p></div>
                    <div className="library">
                        <p className="tech1">Languages/Library/Technology</p>
                        <div className="lib1">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/800px-HTML5_logo_and_wordmark.svg.png" alt="tech-logo1" className="tec-img hov1" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/800px-CSS3_logo_and_wordmark.svg.png" alt="tech-logo2" className="tech-img hov1" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Javascript-shield.svg/640px-Javascript-shield.svg.png" alt="tech-log3" className="tech-img hov1" />
                            {/* <img src="https://i0.wp.com/programmingwithmosh.com/wp-content/uploads/2018/11/800px-React-icon.svg_.png?fit=800%2C565&ssl=1" alt="tech-log4" class="tech-img hov1" /> */}
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default About