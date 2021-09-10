import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Layout from '../components/layout';

const ContactPage = () => {

    return (
        <Layout pageTitle="Contact Me">
            <div>
                <h1>Let's Get in Touch!</h1>
                <div>
                    <FontAwesomeIcon icon={["fab", "github"]} />
                    <FontAwesomeIcon icon={["fab", "linkedin"]}/>
                </div>
                <div>
                    <h2>My Contact Info</h2>
                    <p><FontAwesomeIcon icon="envelope" /> Email: derek.kim1024@gmail.com</p>
                    <p><FontAwesomeIcon icon="phone" /> Phone: (204) 293-7735</p>
                </div>
                <div>
                    <p>My inbox is always open. Leave me a message and I will get back to you as soon as I am able.</p>
                    <form>
                        <div>
                            <label htmlFor='name-input'>Name</label>
                            <input id='name-input'></input>
                        </div>
                        <div>
                            <label htmlFor='email-input'>Email</label>
                            <input id='email-input'></input>
                        </div>
                        <div>
                            <label htmlFor='message-input'>Message</label>
                            <input id='message-input'></input>
                        </div>
                        <div>
                            <button><FontAwesomeIcon icon="paper-plane" /> Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    );
}

export default ContactPage;