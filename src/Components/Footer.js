import React, { Component } from 'react';
import "./Footer.css"
import LinkButtonWhite from './LinkButtonWhite';

const onHomeClick = () => {
    console.log("Home clicked");
}

const onSiteInfoClick = () => {
    console.log("Site information clicked");
}

class Footer extends Component {
    render() {
        return (
            <>
                <div className='footer'>
                    <LinkButtonWhite
                        text="Home"
                        onClick={onHomeClick}
                        className="logOutButton"
                    />
                    <p className='subtitle2 footerText'>Crew+</p>
                    <LinkButtonWhite
                        text="Site information"
                        onClick={onSiteInfoClick}
                        className="logOutButton"
                    />
                </div>
            </>
        );
    }
}

export default Footer;