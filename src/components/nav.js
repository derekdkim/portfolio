import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import {    Flex, 
            Text, 
            Icon, 
            IconButton, 
            Menu, 
            MenuButton, 
            MenuList, 
            MenuItem,
            Link as ChakraLink,
            useColorMode
        } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Component
const NavItem = props => {
    return(
        <Text
            fontWeight="bold" 
            fontSize="xl"
            { ...props }
        >
            { props.children }
        </Text>
    );
}

const NavBar = () => {
    const { toggleColorMode } = useColorMode();

    return (
        <Flex>
            <Flex>
                <IconButton
                    aria-label="Toggle Dark Mode"
                    icon={<Icon as={ FontAwesomeIcon } icon={["far", "lightbulb"]} fontSize="xl" />}
                    variant="ghost"
                    onClick={ toggleColorMode }
                />
            </Flex>
            <Flex
                ml="auto" 
                direction="row"
                display={{ base: "none", md: "flex" }}
            >
                <ChakraLink as={ GatsbyLink } to="/" ml="8"><NavItem>Home</NavItem></ChakraLink>
                <ChakraLink as={ GatsbyLink } to="/blog" ml="8"><NavItem>Blog</NavItem></ChakraLink>
                <ChakraLink as={ GatsbyLink } to="/about" ml="8"><NavItem>About Me</NavItem></ChakraLink>
                <ChakraLink as={ GatsbyLink } to="/projects" ml="8"><NavItem>Projects</NavItem></ChakraLink>
                <ChakraLink as={ GatsbyLink } to="/contact" ml="8"><NavItem>Contact</NavItem></ChakraLink>
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
                            icon={<Icon as={ FontAwesomeIcon } icon={["far", "keyboard"]} />}
                            as={ GatsbyLink }
                            to="/blog"
                        >
                            <Text>Blog</Text>
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