import React, { Component } from 'react';
import "./Footer.css"
import LinkButtonWhite from './LinkButtonWhite';

const onSiteInfoButtonClick = () => {
    const link = "/site-information";
    window.location.assign(link);
};

const onHomeButtonClick = () => {
    const link = "/";
    window.location.assign(link);
};

class Footer extends Component {
    render() {
        return (
            <>
                <div className='footer'>
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
                </div>
            </>
        );
    }
}

export default Footer;