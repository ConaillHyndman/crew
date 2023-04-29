import React, { Component } from 'react';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
// import PrimaryButton from '../Components/PrimaryButton';
import LinkButtonBlack from '../Components/LinkButtonBlack';
import clubMemberData from '../Assets/content/club.json'

let carnloughPath = clubMemberData.clubs[0].carnlough[0].path;
let cairndhuPath = clubMemberData.clubs[0].cairndhu[0].path;
let clubInfo = clubMemberData.clubs[0];

function clubInfoData() {
    if (window.location.pathname === "/my-club/carnlough") {
        return clubInfo.carnlough[0].clubName;
    } else {
        return clubInfo.cairndhu[0].clubName;
    }
}

// const onClubMembersButtonClick = () => {
//     const link = "/club-members" + carnloughPath || cairndhuPath;
//     window.location.assign(link);
// };

const onBackButtonClick = () => {
    window.history.back();
};

const onViewMemberButtonClick = () => {
    const link = "/member-account" + carnloughPath || cairndhuPath;
    window.location.assign(link);
};

const onAddMemberButtonClick = () => {
    const link = "/add-member" + carnloughPath || cairndhuPath;
    window.location.assign(link);
};

function renderList() {
    if (window.location.pathname === "/club-members/carnlough") {
        return clubMemberData.clubs[0].carnlough[0].member
    } else {
        return clubMemberData.clubs[0].cairndhu[0].member
    }
}

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
                    {/* <PrimaryButton
                        text="Club members"
                        onClick={onClubMembersButtonClick}
                    /> */}
                    <h2 className='h4'>Club members</h2>
                    <div className='club-table-container'>
                        <table>
                            <tbody>
                                <tr>
                                    <td className='addMemberCell'>
                                        <LinkButtonBlack
                                            text="+ Add member"
                                            onClick={onAddMemberButtonClick}
                                        />
                                    </td>
                                </tr>
                                <tr className='table-header'>
                                    <th>Rower name</th>
                                    <th>Age group</th>
                                    <th>Crew type</th>
                                </tr>
                                <tr>
                                    <td>{renderList()[0].memberName}</td>
                                    <td>{renderList()[0].ageGroup}</td>
                                    <td>{renderList()[0].crewType}</td>
                                    <td>
                                        <LinkButtonBlack
                                            text="View >"
                                            onClick={onViewMemberButtonClick}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>{renderList()[1].memberName}</td>
                                    <td>{renderList()[1].ageGroup}</td>
                                    <td>{renderList()[1].crewType}</td>
                                    <td>
                                        <LinkButtonBlack
                                            text="View >"
                                            onClick={onViewMemberButtonClick}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>{renderList()[2].memberName}</td>
                                    <td>{renderList()[2].ageGroup}</td>
                                    <td>{renderList()[2].crewType}</td>
                                    <td>
                                        <LinkButtonBlack
                                            text="View >"
                                            onClick={onViewMemberButtonClick}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>{renderList()[3].memberName}</td>
                                    <td>{renderList()[3].ageGroup}</td>
                                    <td>{renderList()[3].crewType}</td>
                                    <td>
                                        <LinkButtonBlack
                                            text="View >"
                                            onClick={onViewMemberButtonClick}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>{renderList()[4].memberName}</td>
                                    <td>{renderList()[4].ageGroup}</td>
                                    <td>{renderList()[4].crewType}</td>
                                    <td>
                                        <LinkButtonBlack
                                            text="View >"
                                            onClick={onViewMemberButtonClick}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>{renderList()[5].memberName}</td>
                                    <td>{renderList()[5].ageGroup}</td>
                                    <td>{renderList()[5].crewType}</td>
                                    <td>
                                        <LinkButtonBlack
                                            text="View >"
                                            onClick={onViewMemberButtonClick}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>{renderList()[6].memberName}</td>
                                    <td>{renderList()[6].ageGroup}</td>
                                    <td>{renderList()[6].crewType}</td>
                                    <td>
                                        <LinkButtonBlack
                                            text="View >"
                                            onClick={onViewMemberButtonClick}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>{renderList()[7].memberName}</td>
                                    <td>{renderList()[7].ageGroup}</td>
                                    <td>{renderList()[7].crewType}</td>
                                    <td>
                                        <LinkButtonBlack
                                            text="View >"
                                            onClick={onViewMemberButtonClick}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>{renderList()[8].memberName}</td>
                                    <td>{renderList()[8].ageGroup}</td>
                                    <td>{renderList()[8].crewType}</td>
                                    <td>
                                        <LinkButtonBlack
                                            text="View >"
                                            onClick={onViewMemberButtonClick}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>{renderList()[9].memberName}</td>
                                    <td>{renderList()[9].ageGroup}</td>
                                    <td>{renderList()[9].crewType}</td>
                                    <td>
                                        <LinkButtonBlack
                                            text="View >"
                                            onClick={onViewMemberButtonClick}
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <Footer />
            </>
        );
    }
}

export default MyClub;