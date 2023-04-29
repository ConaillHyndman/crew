import React, { Component } from 'react';
import "./Signup.css";
import signupIllustration from "../Assets/images/signupIllustration.svg"
import logoImage from "../Assets/images/Logo.svg";
import LinkButtonWhite from '../Components/LinkButtonWhite';
import FormField from '../Components/FormField';
import PrimaryButton from '../Components/PrimaryButton';
import siteContent from "../Assets/content/site.json";

const signUpContent = siteContent.site[0].signup[0];

const onSiteInfoClick = () => {
    const link = "/site-information";
    window.location.assign(link);
}

const onSignupButtonClick = () => {
    const link = "/";
    window.location.assign(link);
};

class Signup extends Component {
    render() {
        return (
            <div className='signupContainer'>
                <div className='imageContainer'>
                    <img className="logoImage" src={logoImage} alt="Crew+ logo" />
                    <div className='signupIllustration'>
                        <img src={signupIllustration} alt="Log in illustration" />
                    </div>
                    <div className="signupSiteInformationButton">
                        <LinkButtonWhite
                            text="Site information"
                            onClick={onSiteInfoClick}
                        />
                    </div>
                </div>
                <div className='right-container'>
                    <div className='signupcontent-container'>
                        <h1 className='h2'>{signUpContent.pageTitle}</h1>
                        <div className='signupForm'>
                            <FormField
                                label="Email"
                            />
                            <FormField
                                type="password"
                                label="Password"
                            />
                            <FormField
                                type="password"
                                label="Confirm password"
                            />
                        </div>
                        <div className="signupButton">
                            <PrimaryButton
                                text="Signup"
                                onClick={onSignupButtonClick}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Signup;