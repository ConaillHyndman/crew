import React, { Component } from 'react';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import PrimaryButton from '../Components/PrimaryButton';
import LinkButtonBlack from '../Components/LinkButtonBlack';
// import clubMemberData from '../Assets/content/club.json';
import FormField from '../Components/FormField';
import "./AddMember.css";

// let carnloughPath = clubMemberData.clubs[0].carnlough[0].path;
// let cairndhuPath = clubMemberData.clubs[0].cairndhu[0].path;

// const onSaveMemberButtonClick = () => {
//     const link = "/member-account" + carnloughPath || cairndhuPath;
//     window.location.assign(link);
// };

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
                    <FormField
                        label="Name"
                    />
                    <FormField
                        label="Age group"
                    />
                    <FormField
                        label="Crew type"
                    />
                    <FormField
                        label="Times"
                    />
                    <div className='saveButton'>
                        <PrimaryButton
                            text="Save info"
                            onClick={onBackButtonClick}
                        />
                    </div>
                </div>
                <Footer />
            </>
        );
    }
}

export default AddMember;