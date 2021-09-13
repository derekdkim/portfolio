import React from 'react';
// Chakra UI
import { ChakraProvider, Box } from '@chakra-ui/react';
// Importing FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faLightbulb, faEnvelope, faPhone, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import NavBar from '../nav';
import Footer from '../footer';

library.add(fab, faLightbulb, faEnvelope, faPhone, faPaperPlane);

const Layout = ({ pageTitle, children }) => {
    return (
        <ChakraProvider>
            <Box m={{ base: "2", md: "16" }}>
                <title>{ pageTitle }</title>
                <NavBar />
                <Box m={{ base: "4", md: "20" }}>
                    { children }
                </Box>
                <Footer/>
            </Box>
        </ChakraProvider>
    );
}

export default Layout;