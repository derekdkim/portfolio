import React from 'react';
import { Icon } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {

    return (
        <div>
            <Icon as={ FontAwesomeIcon } icon={["fab", "github"]} fontSize="3xl" mr="4" />
            <Icon as={ FontAwesomeIcon } icon={["fab", "linkedin"]} fontSize="3xl" />
        </div>
    );
}

export default Footer;