import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {

    return (
        <div>
            <FontAwesomeIcon icon={["fab", "github"]} />
            <FontAwesomeIcon icon={["fab", "linkedin"]}/>
        </div>
    );
}

export default Footer;