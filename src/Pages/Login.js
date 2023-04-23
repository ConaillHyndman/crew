import React, { Component } from 'react';
import "./Login.css";
import loginIllustration from "../Assets/images/loginIllustration.svg"
import logoImage from "../Assets/images/Logo.svg";
import LinkButtonWhite from '../Components/LinkButtonWhite';
import LinkButtonBlack from '../Components/LinkButtonBlack';
import FormField from '../Components/FormField';
import PrimaryButton from '../Components/PrimaryButton';

const onSiteInfoClick = () => {
    const link = "/site-information";
    window.location.assign(link);
};

const onLoginButtonClick = () => {
    const link = "/";
    window.location.assign(link);
};

const onJoinButtonClick = () => {
    const link = "/signup";
    window.location.assign(link);
};

class Login extends Component {
    render() {
        return (
            <div className='loginContainer'>
                <div className='imageContainer'>
                    <img className="logoImage" src={logoImage} alt="Crew+ logo" />
                    <div className='loginIllustration'>
                        <img src={loginIllustration} alt="Log in illustration" />
                    </div>
                    <div className="loginSiteInformationButton">
                        <LinkButtonWhite
                            text="Site information"
                            onClick={onSiteInfoClick}
                        />
                    </div>
                </div>
                <div className='right-container'>
                    <div className='logincontent-container'>
                        <h1 className='h2'>
                            Login
                        </h1>
                        <div className='loginForm'>
                            <FormField
                                label="Username"
                                subtext="Usually your email"
                            />
                            <FormField
                                type="password"
                                label="Password"
                            />
                            <div className='forgottenPasswordLink'>
                                <LinkButtonBlack
                                    text="Forgotten password"
                                />
                            </div>
                            <div className="loginButton">
                                <PrimaryButton
                                    text="Login"
                                    onClick={onLoginButtonClick}
                                />
                            </div>
                            <div className='signupLink'>
                                <p>
                                    Not a member yet?
                                </p>
                                <LinkButtonBlack
                                    text="Join the team"
                                    onClick={onJoinButtonClick}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;