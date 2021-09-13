import React from 'react';
import { Text } from '@chakra-ui/react';

export const NavItem = props => {
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