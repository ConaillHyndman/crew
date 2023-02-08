import React, { Component } from 'react';
import logoImage from "../Assets/images/Logo.svg";
import "./Header.css"
import LinkButtonWhite from './LinkButtonWhite';

const onLogoButtonClick = () => {
    const link = "/";
    window.location.assign(link);
};

const onLogOutButtonClick = () => {
    const link = "/login";
    window.location.assign(link);
};

class header extends Component {
    render() {
        return (
            <>
                <div className='header'>
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
                </div>
            </>
        );
    }
}

export default header;