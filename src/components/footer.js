import React from 'react';
import { Icon, IconButton, Link } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {

    return (
        <div>
            <Link href="https://github.com/derekdkim">
                <IconButton
                    aria-label="Visit Derek's Github"
                    icon={<Icon as={ FontAwesomeIcon } icon={["fab", "github"]} fontSize="3xl" />}
                    mr="4"
                    variant="ghost"
                />
            </Link>
            <Link href="https://ca.linkedin.com/">
                <IconButton
                    aria-label="Visit Derek's Linkedin"
                    icon={<Icon as={ FontAwesomeIcon } icon={["fab", "linkedin"]} fontSize="3xl" />}
                    variant="ghost"
                />
            </Link>
        </div>
    );
}

export default Footer;