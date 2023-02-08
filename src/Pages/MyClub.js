import React, { Component } from 'react';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import PrimaryButton from '../Components/PrimaryButton';
import LinkButtonBlack from '../Components/LinkButtonBlack';

const onClubMembersButtonClick = () => {
    const link = "/club-members";
    window.location.assign(link);
};

const onBackButtonClick = () => {
    window.history.back();
};

class MyClub extends Component {
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
                    <h1 className='h2'>My club</h1>
                    <PrimaryButton
                        text="Club members"
                        onClick={onClubMembersButtonClick}
                    />
                </div>
                <Footer />
            </>
        );
    }
}

export default MyClub;