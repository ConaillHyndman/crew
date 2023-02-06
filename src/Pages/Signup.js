import React, { Component } from 'react';
import "./Login.css";
import signupIllustration from "../Assets/images/signupIllustration.svg"
import logoImage from "../Assets/images/Logo.svg";
import LinkButtonWhite from '../Components/LinkButtonWhite';
import FormField from '../Components/FormField';
import PrimaryButton from '../Components/PrimaryButton';

const onSiteInfoClick = () => {
    console.log("Site information button click");
}

class Signup extends Component {
    render() {
        return (
            <div className='loginContainer'>
                <div className='imageContainer'>
                    <img className="logoImage" src={logoImage} alt="Crew+ logo" />
                    <img src={signupIllustration} alt="Log in illustration" />
                    <LinkButtonWhite
                        className="siteInformationButton"
                        text="Site information"
                        onClick={onSiteInfoClick}
                    />
                </div>
                <div className='loginContentContainer'>
                    <h1 className='h2'>
                        Join the team
                    </h1>
                    <FormField
                        label="Email"
                    />
                    <FormField
                        label="Password"
                    />
                    <FormField
                        label="Confirm password"
                    />
                    <PrimaryButton
                        text="Signup"
                    />
                </div>
            </div>
        );
    }
}

export default Signup;