import React, { Component } from 'react';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import PrimaryButton from '../Components/PrimaryButton';
import LinkButtonBlack from '../Components/LinkButtonBlack';
import clubMemberData from '../Assets/content/club.json'

let arrayPath = clubMemberData.clubs.map((i) => i.path);

const onSaveMemberButtonClick = () => {
    const link = "/member-account" + arrayPath[0] || arrayPath[2];
    window.location.assign(link);
};

const onBackButtonClick = () => {
    window.history.back();
};

class AddMember extends Component {
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
                    <h1 className='h2'>Add member</h1>
                    <PrimaryButton
                        text="Save member"
                        onClick={onSaveMemberButtonClick}
                    />
                </div>
                <Footer />
            </>
        );
    }
}

export default AddMember;