import React, { Component } from 'react';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import PrimaryButton from '../Components/PrimaryButton';
import LinkButtonBlack from '../Components/LinkButtonBlack';
import clubMemberData from '../Assets/content/club.json'

let arrayPath = clubMemberData.clubs[0].carnlough[0].path || clubMemberData.clubs[0].cairndhu[0].path;
let clubInfo = clubMemberData.clubs[0].carnlough[0] || clubMemberData.clubs[0].cairndhu[0]

function clubInfoData() {
    if (window.location.pathname === "/my-club/carnlough") {
        return clubInfo.clubName;
    } else {
        return clubInfo.clubName;
    }
}

const onClubMembersButtonClick = () => {
    const link = "/club-members" + arrayPath;
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