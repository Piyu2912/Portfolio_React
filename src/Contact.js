import React from 'react'

const Contact = () => {
    return (
        <div>
            <div className="top1">
                <h2 className="head1 port1 contme">Contact Me</h2>
            </div>
            <div className="cont" id="contact-main">
                <div className="left-cont">
                    <h2 className="let">Let's Contact</h2>
                    <p className="cont-text">Don't be Shy! I love meeting new people. Contact me and we will have a nice discussion.</p>
                    <div className="details">
                        <p className="cont-icon"><i className="fas fa-envelope"></i> piyush4085@gmail.com</p>
                        <p className="cont-icon"><i className="fas fa-phone-alt"></i> 9729350500</p>
                        <p className="cont-icon"><i className="fas fa-map-pin"></i> 2427, Sec-13, HUDA, Bhiwani - 127021</p>
                    </div>
                </div>
                <div className="right-cont">
                    <p className="form-head">Send me a message</p>
                    <label for="name">First &amp; Last name</label>
                    <span className="star1">*</span><br />
                    <input type="text" id='name1' name="name" />
                    <br />
                    <label for="phnumber">Phone Number</label>
                    <span className="star1">*</span><br />
                    <input type="text" id='phnumber1' name="phnumber" />
                    <br />
                    <label for="emailadd">Email Address</label>
                    <span className="star1">*</span><br />
                    <input type="email" id='emailadd1' name="emailadd" />
                    <br />
                    <label for="mess">Message</label>
                    <span className="star1">*</span><br />
                    <textarea name="mess" id="mess1" cols="50" rows="3"></textarea>
                    <br />
                    <input type="submit" value="Send Message" />
                </div>
            </div>
        </div>
    )
}

export default Contact