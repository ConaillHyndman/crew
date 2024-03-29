import React, { Component } from 'react';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import LinkButtonBlack from '../Components/LinkButtonBlack';
import siteContent from "../Assets/content/site.json";

const infoContent = siteContent.site[0].siteInfo[0];

const onBackButtonClick = () => {
    window.history.back();
};

class SiteInfo extends Component {
    render() {
        return (
            <>
                <Header />
                <div className='back-button'>
                    <LinkButtonBlack
                        text="< Back"
                        onClick={onBackButtonClick}
                    />
                </div>
                <div className='content-container'>
                    <h1 className='h2'>{infoContent.pageTitle}</h1>
                        <p>{infoContent.crewPlusStory1}</p>
                        <p>{infoContent.crewPlusStory2}</p>
                    <ul>
                        <li>{infoContent.crewPlusStory3}</li>
                        <li>{infoContent.crewPlusStory4}</li>
                        <li>{infoContent.crewPlusStory5}</li>
                        <li>{infoContent.crewPlusStory6}</li>
                    </ul>
                        <p>{infoContent.crewPlusStory7}</p>
                    <ul>
                        <li>{infoContent.crewPlusStory8}</li>
                        <li>{infoContent.crewPlusStory9}</li>
                        <li>{infoContent.crewPlusStory10}</li>
                    </ul>
                    <p>{infoContent.siteImages}</p>
                </div>
                <Footer />
            </>
        );
    }
}

export default SiteInfo;