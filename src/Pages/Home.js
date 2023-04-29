import React, { Component } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import PrimaryButton from '../Components/PrimaryButton';
import "./Home.css"
import clubMemberData from '../Assets/content/club.json'
import siteContent from "../Assets/content/site.json";

const homeContent = siteContent.site[0].home[0];

let carnloughPath = clubMemberData.clubs[0].carnlough[0].path;
let cairndhuPath = clubMemberData.clubs[0].cairndhu[0].path;;

const onCrewListButtonClick = () => {
    const link = '/crew-lists' + carnloughPath || cairndhuPath;
    window.location.assign(link);
};

const onMyClubButtonClick = () => {
    const link = '/my-club' + carnloughPath || cairndhuPath;
    window.location.assign(link);
};

class Home extends Component {
    render() {
        return (
            <>
                <Header />
                <div className='home-content-container'>
                    <h1 className='h2'>{homeContent.pageTitle}</h1>
                    <div className='cards-container'>
                        <div className="homepage-cards">
                            <p className='h3 card-header'>{homeContent.crewsCardTitle}</p>
                            <p>{homeContent.crewsCardInfo}</p>
                            <PrimaryButton
                                text="View crew lists"
                                onClick={onCrewListButtonClick}
                            />
                        </div>
                        <div className="homepage-cards">
                            <p className='h3 card-header'>{homeContent.clubCardTitle}</p>
                            <p>{homeContent.clubCardInfo}</p>
                            <PrimaryButton
                                text="View my club"
                                onClick={onMyClubButtonClick}
                            />
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        );
    }
}

export default Home;