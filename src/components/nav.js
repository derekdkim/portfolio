import React from 'react';
import { Link } from 'gatsby';
import { Box, Flex, Text, extendTheme, Icon } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavText = {
    baseStyle: {
        fontWeight: "bold",
        fontSize: "xl"
    }
}

const theme = extendTheme({

});

const NavBar = () => {

    return (
        <Flex>
            <Flex>
                <Icon as={ FontAwesomeIcon } icon="lightbulb" fontSize="xl"/>
            </Flex>
            <Flex ml="auto" direction="row">
                <Link to='/'><Text fontWeight="bold" fontSize="xl" ml="8">Home</Text></Link>
                <Link to='/about'><Text fontWeight="bold" fontSize="xl" ml="8">About Me</Text></Link>
                <Link to='/projects'><Text fontWeight="bold" fontSize="xl" ml="8">Projects</Text></Link>
                <Link to='/contact'><Text fontWeight="bold" fontSize="xl" ml="8">Contact</Text></Link>
            </Flex>
        </Flex>
    );
}

export default NavBar;