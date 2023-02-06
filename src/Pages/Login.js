import React, { Component } from 'react';
import "./Login.css";
import loginIllustration from "../Assets/images/loginIllustration.svg"
import logoImage from "../Assets/images/Logo.svg";
import LinkButton from '../Components/LinkButton';

const onSiteInfoClick = () => {
    console.log("Site information button click");
}

class Login extends Component {
    render() {
        return (
            <div className='loginContainer'>
                <div className='imageContainer'>
                    <img className="logoImage" src={logoImage} alt="Crew+ logo" />
                    <img src={loginIllustration} alt="Log in illustration" />
                    <LinkButton
                        text="Site information"
                        onClick={onSiteInfoClick}
                    />
                </div>
                <h1 className='h2'>
                    Login
                </h1>
            </div>
        );
    }
}

export default Login;