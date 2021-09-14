import React from 'react';
import { Icon, IconButton } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {

    return (
        <div>
            <IconButton
                aria-label="Visit Derek's Github"
                icon={<Icon as={ FontAwesomeIcon } icon={["fab", "github"]} fontSize="3xl" />}
                mr="4"
            />
            <IconButton
                aria-label="Visit Derek's Linkedin"
                icon={<Icon as={ FontAwesomeIcon } icon={["fab", "linkedin"]} fontSize="3xl" />}
            />
        </div>
    );
}

export default Footer;