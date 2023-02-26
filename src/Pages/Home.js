import React, { Component } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import PrimaryButton from '../Components/PrimaryButton';
import "./Home.css"

const onCrewListButtonClick = () => {
    const link = "/crew-lists";
    window.location.assign(link);
};

const onMyClubButtonClick = () => {
    const link = "/my-club";
    window.location.assign(link);
};

class Home extends Component {
    render() {
        return (
            <>
                <Header />
                <div className='home-content-container'>
                    <h1 className='h2'>Home</h1>
                    <div className='cards-container'>
                        <div className="homepage-cards">
                            <p className='h3 card-header'>Crews</p>
                            <p>View the suggested crew lists from your clubs data!</p>
                            <PrimaryButton
                                text="View crew lists"
                                onClick={onCrewListButtonClick}
                            />
                        </div>
                        <div className="homepage-cards">
                            <p className='h3 card-header'>My club</p>
                            <p>View your club information and it's members</p>
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