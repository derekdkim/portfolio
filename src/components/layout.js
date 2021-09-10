import React from 'react';
// Importing FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faLightbulb, faEnvelope, faPhone, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import NavBar from './nav';
import Footer from './footer';

library.add(fab, faLightbulb, faEnvelope, faPhone, faPaperPlane);

const Layout = ({ pageTitle, children }) => {
    return (
        <div>
            <title>{ pageTitle }</title>
            <div>
                <FontAwesomeIcon icon="lightbulb" />
            </div>
            <NavBar />
            <main>
                { children }
            </main>
            <Footer/>
        </div>
    );
}

export default Layout;