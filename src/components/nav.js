import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import {    Flex, 
            Text, 
            extendTheme, 
            Icon, 
            IconButton, 
            Menu, 
            MenuButton, 
            MenuList, 
            MenuItem,
        } from '@chakra-ui/react';
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
                <IconButton
                    aria-label="Toggle Dark Mode"
                    icon={<Icon as={ FontAwesomeIcon } icon={["far", "lightbulb"]} fontSize="xl" />}
                />
            </Flex>
            <Flex
                ml="auto" 
                direction="row"
                display={{ base: "none", md: "flex" }}
            >
                <GatsbyLink to='/'><NavItem>Home</NavItem></GatsbyLink>
                <GatsbyLink to='/about'><NavItem>About Me</NavItem></GatsbyLink>
                <GatsbyLink to='/projects'><NavItem>Projects</NavItem></GatsbyLink>
                <GatsbyLink to='/contact'><NavItem>Contact</NavItem></GatsbyLink>
            </Flex>
            <Flex 
                ml="auto"
                display={{ base: "flex", md: "none" }}
            >
                <Menu>
                    <MenuButton
                        as={ IconButton }
                        aria-label="Nav Menu"
                        icon={<Icon as={ FontAwesomeIcon } icon="bars" fontSize="2xl" />}
                    />
                    <MenuList>
                        <MenuItem
                            icon={<Icon as={ FontAwesomeIcon } icon="home" />}
                            as={ GatsbyLink }
                            to="/"
                        >
                            <Text>Home</Text>
                        </MenuItem>
                        <MenuItem
                            icon={<Icon as={ FontAwesomeIcon } icon={["far", "grin-wink"]} />}
                            as={ GatsbyLink }
                            to="/about"
                        >
                            <Text>About Me</Text>
                        </MenuItem>
                        <MenuItem
                            icon={<Icon as={ FontAwesomeIcon } icon="project-diagram" />}
                            as={ GatsbyLink }
                            to="/projects"
                        >
                            <Text>Projects</Text>
                        </MenuItem>
                        <MenuItem
                            icon={<Icon as={ FontAwesomeIcon } icon="address-book" />}
                            as={ GatsbyLink }
                            to="/contact"
                        >
                            <Text>Contact</Text>
                        </MenuItem>
                    </MenuList>
                </Menu>
            </Flex>
        </Flex>
    );
}

export default NavBar;