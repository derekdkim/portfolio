import React from 'react';
import { Link } from 'gatsby';
import { Box, Flex, Text, extendTheme, Icon } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Component
const NavItem = props => {
    return(
        <Text
            fontWeight="bold" 
            fontSize="xl" 
            ml="8"
            { ...props }
        >
            { props.children }
        </Text>
    );
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
                <Link to='/'><NavItem>Home</NavItem></Link>
                <Link to='/about'><NavItem>About Me</NavItem></Link>
                <Link to='/projects'><NavItem>Projects</NavItem></Link>
                <Link to='/contact'><NavItem>Contact</NavItem></Link>
            </Flex>
        </Flex>
    );
}

export default NavBar;