import React from 'react'

function Contact() {
    return (
        <div id="contact">
            <h1>CONTACT US</h1>
            <form>
                <input type="text" placeholder="Full Name" required/>
                <input type="email" placeholder="Enter Your Email" required/>
                <textarea name="message" placeholder="Write here......"></textarea>
                <input type="submit" value="send"/>
            </form>
        </div>
    )
}

export default Contact;
