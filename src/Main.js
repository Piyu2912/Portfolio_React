import React from 'react'




const Main = () => {
    return (
        <div>
            

            
            
            
            
            <div class="top1">
                <h2 class="head1 port1 contme">Contact Me</h2>
            </div>
            <div class="cont" id="contact-main">
                <div class="left-cont">
                    <h2 class="let">Let's Contact</h2>
                    <p class="cont-text">Don't be Shy! I love meeting new people. Contact me and we will have a nice discussion.</p>
                    <div class="details">
                        <p class="cont-icon"><i class="fas fa-envelope"></i> piyush4085@gmail.com</p>
                        <p class="cont-icon"><i class="fas fa-phone-alt"></i> 9729350500</p>
                        <p class="cont-icon"><i class="fas fa-map-pin"></i> 2427, Sec-13, HUDA, Bhiwani - 127021</p>
                    </div>
                </div>
                <div class="right-cont">
                    <p class="form-head">Send me a message</p>
                    <label for="name">First &amp; Last name</label>
                    <span class="star1">*</span><br />
                    <input type="text" name="name" />
                    <br />
                    <label for="phnumber">Phone Number</label>
                    <span class="star1">*</span><br />
                    <input type="text" name="phnumber" />
                    <br />
                    <label for="emailadd">Email Address</label>
                    <span class="star1">*</span><br />
                    <input type="email" name="emailadd" />
                    <br />
                    <label for="mess">Message</label>
                    <span class="star1">*</span><br />
                    <textarea name="mess" id="mess1" cols="50" rows="3"></textarea>
                    <br />
                    <input type="submit" value="Send Message" />
                </div>
            </div>
            <div class="footer">
                <p class="foot">&copy; 2021 Piyush Yadav. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Main