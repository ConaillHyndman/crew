import React, { Component } from 'react';
import logoImage from "../Assets/images/Logo.svg";
import "./Header.css"
import LinkButton from './LinkButton';

const onLogOutClick = () => {
    console.log("Log out clicked");
}

class header extends Component {
    render() {
        return (
            <>
                <div className='header'>
                    <img src={logoImage} alt="Crew+ logo" />
                    <LinkButton
                        text="Log out"
                        onClick={onLogOutClick}
                        className="logOutButton"
                    />
                </div>
            </>
        );
    }
}

export default header;