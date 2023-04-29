import React, { Component } from 'react';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import PrimaryButton from '../Components/PrimaryButton';
import LinkButtonBlack from '../Components/LinkButtonBlack';
import clubMemberData from '../Assets/content/club.json'

let carnloughPath = clubMemberData.clubs[0].carnlough[0].path;
let cairndhuPath = clubMemberData.clubs[0].cairndhu[0].path;;

const onSaveMemberInfoButtonClick = () => {
    // const link = "/member-account" + carnloughPath || cairndhuPath;
    const link = "/member-account" + carnloughPath || cairndhuPath;
    window.location.assign(link);
};

const onBackButtonClick = () => {
    window.history.back();
};

class AddInfo extends Component {
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
                    <h1 className='h2'>Add info</h1>
                    <PrimaryButton
                        text="Save info"
                        onClick={onSaveMemberInfoButtonClick}
                    />
                </div>
                <Footer />
            </>
        );
    }
}

export default AddInfo;