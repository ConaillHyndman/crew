import React, { Component } from 'react';
import logoImage from "../Assets/images/Logo.svg";
import "./Header.css"
import LinkButtonWhite from './LinkButtonWhite';

const onLogoButtonClick = () => {
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

const onLogOutButtonClick = () => {
    const link = "/login";
    window.location.assign(link);
};

class header extends Component {
    render() {
        return (
            <>
                <nav className='header'>
                    <img
                        className="logo-button"
                        src={logoImage}
                        alt="Crew+ logo"
                        onClick={onLogoButtonClick}
                    />
                    <LinkButtonWhite
                        text="Log out"
                        onClick={onLogOutButtonClick}
                        className="logOutButton"
                    />
                </nav>
            </>
        );
    }
}

export default header;