import React, { Component } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import PrimaryButton from '../Components/PrimaryButton';

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
                    <h1 className='h2'>main header</h1>
                    <PrimaryButton
                    text="Crews"
                    onClick={onCrewListButtonClick}
                    />
                    <PrimaryButton
                    text="My Club"
                    onClick={onMyClubButtonClick}
                    />
                </div>
                <Footer />
            </>
        );
    }
}

export default Home;