import React, { Component } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import PrimaryButton from '../Components/PrimaryButton';
import "./Home.css"
import clubMemberData from '../Assets/content/club.json'

let arrayPath = clubMemberData.clubs.map((i) => i.path);

const onCrewListButtonClick = () => {
    const link = '/crew-lists' + arrayPath[0] || arrayPath[2];
    window.location.assign(link);
};

const onMyClubButtonClick = () => {
    const link = '/my-club' + arrayPath[0] || arrayPath[2];
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