import React, { Component } from 'react';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import PrimaryButton from '../Components/PrimaryButton';
import LinkButtonBlack from '../Components/LinkButtonBlack';
import clubMemberData from '../Assets/content/club.json'

let arrayPath = clubMemberData.clubs.map((i) => i.path);
let clubInfo = clubMemberData.clubs.map((i) => i);

function clubInfoData() {
    if (window.location.pathname === "/my-club/carnlough") {
        return clubInfo[0].clubName;
    } else {
        return clubInfo[2].clubName;
    }
}

const onClubMembersButtonClick = () => {
    const link = "/club-members" + arrayPath[0] || arrayPath[2];
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
                    <h1 className='h2'>
                        {clubInfoData()}
                    </h1>
                    <p></p>
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