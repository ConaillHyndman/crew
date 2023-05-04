import React, { Component } from 'react';
import "./Footer.css"
import LinkButtonWhite from './LinkButtonWhite';

const onSiteInfoButtonClick = () => {
    const link = "/site-information";
    window.location.assign(link);
};

const onHomeButtonClick = () => {
    if (window.location.pathname.includes("carnlough")) {
        const link = "/carnlough";
        window.location.assign(link);
    } else if (window.location.pathname.includes("cairndhu")) {
        const link = "/cairndhu";
        window.location.assign(link);
    } else {
        const link = "/carnlough";
        window.location.assign(link);
    }
};

class Footer extends Component {
    render() {
        return (
            <>
                <footer className='footer'>
                    <LinkButtonWhite
                        text="Home"
                        onClick={onHomeButtonClick}
                        className="logOutButton"
                    />
                    <p className='subtitle2 footerText'>Crew+</p>
                    <LinkButtonWhite
                        text="Site information"
                        onClick={onSiteInfoButtonClick}
                        className="logOutButton"
                    />
                </footer>
            </>
        );
    }
}

export default Footer;