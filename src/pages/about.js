import React from 'react';
import { Link } from "gatsby";

import Layout from '../components/layout';

// Content Data
const paragraph0 = 'Why is someone trained in Microbiology trying to become a Software Developer? I thought I had everything figured out when I went to grad school until I unexpectedly fell in love with the problem-solving nature and sheer versatility of programming. As a life-long nerd, the desire to be a part of creating this ever-evolving space kept growing inside me.';
const paragraph1 = 'Thanks to the breathtaking amount of resources available online and helpful communities, I was able to learn from zero and dip my feet in open-source development, which cemented my passion for this craft. I still have a lot to learn as a self-taught developer but every new piece of technology I learn is an adventure I am excited to take part in. I’d love to be able to put my passion towards making something useful for you.';

const AboutPage = () => {
    return (
        <Layout pageTitle="About Me">
            <div>
                {/* Left Section */}
                <div>
                    <h1>My Story</h1>
                    <p>{paragraph0}</p>
                    <br></br>
                    <p>{paragraph1}</p>
                </div>
                {/* Right Section */}
                <div>
                    <img src='' alt='profile-pic'></img>
                </div>
            </div>
            <div>
                <Link to="/contact"><button>Get in touch</button></Link>
            </div>
        </Layout>
    );
}

export default AboutPage;