import React, { Component } from 'react';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import PrimaryButton from '../Components/PrimaryButton';
import LinkButtonBlack from '../Components/LinkButtonBlack';
import clubMemberData from '../Assets/content/club.json'

let carnloughPath = clubMemberData.clubs[0].carnlough[0].path;
let cairndhuPath = clubMemberData.clubs[0].cairndhu[0].path;

let carnloughMemberContent = clubMemberData.clubs[0].carnlough[0].member[0];
let carnloughMember0Content = clubMemberData.clubs[0].carnlough[0].member[0];
let carnloughMember1Content = clubMemberData.clubs[0].carnlough[0].member[1];
let carnloughMember2Content = clubMemberData.clubs[0].carnlough[0].member[2];
let carnloughMember3Content = clubMemberData.clubs[0].carnlough[0].member[3];
let carnloughMember4Content = clubMemberData.clubs[0].carnlough[0].member[4];
let carnloughMember5Content = clubMemberData.clubs[0].carnlough[0].member[5];
let carnloughMember6Content = clubMemberData.clubs[0].carnlough[0].member[6];
let carnloughMember7Content = clubMemberData.clubs[0].carnlough[0].member[7];
let carnloughMember8Content = clubMemberData.clubs[0].carnlough[0].member[8];
let carnloughMember9Content = clubMemberData.clubs[0].carnlough[0].member[9];
let cairndhuMember0Content = clubMemberData.clubs[0].cairndhu[0].member[0];
let cairndhuMember1Content = clubMemberData.clubs[0].cairndhu[0].member[1];
let cairndhuMember2Content = clubMemberData.clubs[0].cairndhu[0].member[2];
let cairndhuMember3Content = clubMemberData.clubs[0].cairndhu[0].member[3];
let cairndhuMember4Content = clubMemberData.clubs[0].cairndhu[0].member[4];
let cairndhuMember5Content = clubMemberData.clubs[0].cairndhu[0].member[5];
let cairndhuMember6Content = clubMemberData.clubs[0].cairndhu[0].member[6];
let cairndhuMember7Content = clubMemberData.clubs[0].cairndhu[0].member[7];
let cairndhuMember8Content = clubMemberData.clubs[0].cairndhu[0].member[8];
let cairndhuMember9Content = clubMemberData.clubs[0].cairndhu[0].member[9];

function renderMemberData() {
    if (window.location.pathname === "/member-account/carnlough") {
        return carnloughMemberContent;
    } else if (window.location.pathname === "/member-account/carnlough/1") {
        return carnloughMember0Content
    } else if (window.location.pathname === "/member-account/carnlough/2") {
        return carnloughMember1Content
    } else if (window.location.pathname === "/member-account/carnlough/3") {
        return carnloughMember2Content
    } else if (window.location.pathname === "/member-account/carnlough/4") {
        return carnloughMember3Content
    } else if (window.location.pathname === "/member-account/carnlough/5") {
        return carnloughMember4Content
    } else if (window.location.pathname === "/member-account/carnlough/6") {
        return carnloughMember5Content
    } else if (window.location.pathname === "/member-account/carnlough/7") {
        return carnloughMember6Content
    } else if (window.location.pathname === "/member-account/carnlough/8") {
        return carnloughMember7Content
    } else if (window.location.pathname === "/member-account/carnlough/9") {
        return carnloughMember8Content
    } else if (window.location.pathname === "/member-account/carnlough/10") {
        return carnloughMember9Content
    } else if (window.location.pathname === "/member-account/cairndhu/1") {
        return cairndhuMember0Content
    } else if (window.location.pathname === "/member-account/cairndhu/2") {
        return cairndhuMember1Content
    } else if (window.location.pathname === "/member-account/cairndhu/3") {
        return cairndhuMember2Content
    } else if (window.location.pathname === "/member-account/cairndhu/4") {
        return cairndhuMember3Content
    } else if (window.location.pathname === "/member-account/cairndhu/5") {
        return cairndhuMember4Content
    } else if (window.location.pathname === "/member-account/cairndhu/6") {
        return cairndhuMember5Content
    } else if (window.location.pathname === "/member-account/cairndhu/7") {
        return cairndhuMember6Content
    } else if (window.location.pathname === "/member-account/cairndhu/8") {
        return cairndhuMember7Content
    } else if (window.location.pathname === "/member-account/cairndhu/9") {
        return cairndhuMember8Content
    } else if (window.location.pathname === "/member-account/cairndhu/10") {
        return cairndhuMember9Content
    }
}
// function renderMemberData() {
//     if (window.location.pathname === "/member-account/carnlough") {
//         return carnloughMemberContent;
//     } else {
//         return cairndhuhMemberContent;
//     }
// }

const onAddMemberInfoButtonClick = () => {
    if (
        window.location.pathname.includes("carnlough")
    ) {
        const link = "/add-info" + carnloughPath;
        window.location.assign(link);
    } else if (
        window.location.pathname.includes("cairndhu")
    ) {
        const link = "/add-info" + cairndhuPath;
        window.location.assign(link);
    } else {
        const link = "/add-info" + cairndhuPath;
        window.location.assign(link);
    }
};

const onBackButtonClick = () => {
    window.history.back();
};

class MemberAccount extends Component {
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
                    <h1 className='h2'>Member account</h1>
                    <h2>Name:</h2>
                    <p>{renderMemberData().memberName}</p>
                    <h2>Age group:</h2>
                    <p>{renderMemberData().ageGroup}</p>
                    <h2>Crew type:</h2>
                    <p>{renderMemberData().crewType}</p>
                    <h2>Times:</h2>
                    <p>{renderMemberData().times}</p>
                    <PrimaryButton
                        text="Add info"
                        onClick={onAddMemberInfoButtonClick}
                    />
                </div>
                <Footer />
            </>
        );
    }
}

export default MemberAccount;