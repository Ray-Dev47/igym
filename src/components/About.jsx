import React from 'react';
import aboutImages from '../images/about1.jpg';

function About() {
    return (
        <div id="about">
            <div className="about-image">
                <img src={aboutImages} alt="about" />
            </div>
            <div className="about-text">
                <h1>FIND MORE ABOUT US</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint possimus illum voluptatem harum id blanditiis temporibus commodi ab cupiditate animi? Sunt quos, expedita omnis non unde labore, error ipsa hic possimus nihil ullam delectus corrupti aperiam modi ipsam animi nemo.</p>
                <button>READ MORE</button>
            </div>
        </div>
    )
}

export default About
