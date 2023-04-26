import React, { Component } from 'react';
import './ComponentLibrary.css';
import LinkButtonBlack from '../Components/LinkButtonBlack';
import LinkButtonWhite from '../Components/LinkButtonWhite';
import PrimaryButton from '../Components/PrimaryButton';
import SecondaryButton from '../Components/SecondaryButton';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import FormField from '../Components/FormField';

const onPrimaryButtonClick = () => {
    console.log("Primary button clicked");
}

const onSecondaryButtonClick = () => {
    console.log("Secondary button clicked");
}

const onLinkButtonClick = () => {
    console.log("Link button clicked");
}

class ComponentLibrary extends Component {
    render() {
        return (
            <>
                <Header />
                <div className='CLWrapper'>
                    <h1 className='h6'>
                        Colours
                    </h1>
                    <div className='colorsStyles'>
                        <div className='background'>
                            <p>Background</p>
                            <p className='body2'>#283740</p>
                        </div>
                        <div className='primary'>
                            <p>Primary</p>
                            <p className='body2'>#94B6C2</p>
                        </div>
                        <div className='secondary'>
                            <p>Secondary</p>
                            <p className='body2'>#B8B08C</p>
                        </div>
                        <div className='error'>
                            <p>Error</p>
                            <p className='body2'>#BB9390</p>
                        </div>
                    </div>
                    <hr />
                    <h1 className='h6'>
                        Form field
                    </h1>
                    <div className='formFieldStyles'>
                        <FormField
                            label="Label"
                        />
                        <FormField
                            label="Label"
                            subtext="Subtext"
                        />
                        <FormField
                            type="password"
                            label="Password example"
                        />
                    </div>
                    <hr />
                    <h1 className='h6'>
                        Buttons
                    </h1>
                    <div className='buttonsStyles'>
                        <PrimaryButton
                            text="Primary Button"
                            className="primaryButton"
                            onClick={onPrimaryButtonClick}
                        />
                        <SecondaryButton
                            text="Secondary Button"
                            className="secondaryButton"
                            onClick={onSecondaryButtonClick}
                        />
                        <LinkButtonWhite
                            text="Link Button"
                            className="LinkButtonWhite"
                            onClick={onLinkButtonClick}
                        />
                        <LinkButtonBlack
                            text="Link Button"
                            className="LinkButtonBlack"
                            onClick={onLinkButtonClick}
                        />
                    </div>
                    <hr />
                    <h1 className='h6'>
                        Typography
                    </h1>
                    <div className='fontWeightStyles'>
                        <p className='light'>Light - 300</p>
                        <p className='regular'>Regular - 400</p>
                        <p className='medium'>Medium - 500</p>
                        <p className='semibold'>SemiBold - 600</p>
                        <p className='bold'>Bold - 700</p>
                    </div>
                    <div className='typographyStylesContainer'>
                        <h1 className='h1 typographyMargin'>H1</h1>
                        <h2 className='h2 typographyMargin'>H2</h2>
                        <h3 className='h3 typographyMargin'>H3</h3>
                        <h4 className='h4 typographyMargin'>H4</h4>
                        <h5 className='h5 typographyMargin'>H5</h5>
                        <h6 className='h6 typographyMargin'>H6</h6>
                        <p className='subtitle1 typographyMargin'>Subtitle 1</p>
                        <p className='subtitle2 typographyMargin'>Subtitle 2</p>
                        <p className='body1 typographyMargin'>Body 1</p>
                        <p className='body2 typographyMargin'>Body 2</p>
                        <p className='button typographyMargin'>Button</p>
                    </div>
                </div>
                <Footer />
            </>
        );
    }
}

export default ComponentLibrary;