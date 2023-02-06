import React, { Component } from 'react';
import "./Login.css";
import loginIllustration from "../Assets/images/loginIllustration.svg"
import logoImage from "../Assets/images/Logo.svg";
import LinkButtonWhite from '../Components/LinkButtonWhite';
import LinkButtonBlack from '../Components/LinkButtonBlack';
import FormField from '../Components/FormField';
import PrimaryButton from '../Components/PrimaryButton';

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
                    <LinkButtonWhite
                        className="siteInformationButton"
                        text="Site information"
                        onClick={onSiteInfoClick}
                    />
                </div>
                <div className='loginContentContainer'>
                    <h1 className='h2'>
                        Login
                    </h1>
                    <FormField
                        label="Username"
                        subtext="Usually your email"
                    />
                    <FormField
                        label="Password"
                    />
                    <LinkButtonBlack
                        text="Forgotten password"
                    />
                    <PrimaryButton
                        text="Login"
                    />
                    <div className='signupLink'>
                        <p>
                            Not a member yet?
                        </p>
                        <LinkButtonBlack
                            text="Join the team"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;