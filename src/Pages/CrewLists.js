import React, { Component } from 'react';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import LinkButtonBlack from '../Components/LinkButtonBlack';
import './CrewLists.css'
import clubMemberData from "../Assets/content/club.json";

function renderList() {
    if (window.location.pathname === "/crew-lists/carnlough") {
        return clubMemberData.clubs[0].carnlough[0].member
    } else {
        return clubMemberData.clubs[0].cairndhu[0].member
    }
}

// function renderList2() {
//     if (window.location.pathname === "/crew-lists/carnlough") {
//         let test = clubMemberData.clubs[0].carnlough[0].member.map((i) => i.ageGroup)
//         console.log(test.map((i) => i[7]));
//         console.log(test);
//         if (test.map((i) => i)[7] ? '2' : null) {
//             console.log("yep");
//             console.log(clubMemberData.clubs[0].carnlough[0].member.map((i) => i.memberName));
//         } else {
//             console.log("nope");
//         }
//     } else {
//         console.log("invalid path");
//         return clubMemberData.clubs[0].cairndhu[0].member
//     }
// }

// renderList2();

const onBackButtonClick = () => {
    window.history.back();
};

class CrewLists extends Component {
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
                    <h1 className='h2'>Crew lists</h1>
                    {/*  */}

                    {/* <div className='club-table-container'>
                        <table>
                            <tbody>
                                <tr className='table-header'>
                                    <th>Rower name</th>
                                    <th>Age group</th>
                                    <th>Crew type</th>
                                </tr>
                                <tr>
                                    <td>{renderList()[0].memberName}</td>
                                    <td>{renderList()[0].ageGroup}</td>
                                    <td>{renderList()[0].crewType}</td>
                                </tr>
                                <tr>
                                    <td>{renderList()[1].memberName}</td>
                                    <td>{renderList()[1].ageGroup}</td>
                                    <td>{renderList()[1].crewType}</td>
                                </tr>
                                <tr>
                                    <td>{renderList()[2].memberName}</td>
                                    <td>{renderList()[2].ageGroup}</td>
                                    <td>{renderList()[2].crewType}</td>
                                </tr>
                                <tr>
                                    <td>{renderList()[3].memberName}</td>
                                    <td>{renderList()[3].ageGroup}</td>
                                    <td>{renderList()[3].crewType}</td>
                                </tr>
                                <tr>
                                    <td>{renderList()[4].memberName}</td>
                                    <td>{renderList()[4].ageGroup}</td>
                                    <td>{renderList()[4].crewType}</td>
                                </tr>
                                <tr>
                                    <td>{renderList()[5].memberName}</td>
                                    <td>{renderList()[5].ageGroup}</td>
                                    <td>{renderList()[5].crewType}</td>
                                </tr>
                                <tr>
                                    <td>{renderList()[6].memberName}</td>
                                    <td>{renderList()[6].ageGroup}</td>
                                    <td>{renderList()[6].crewType}</td>
                                </tr>
                                <tr>
                                    <td>{renderList()[7].memberName}</td>
                                    <td>{renderList()[7].ageGroup}</td>
                                    <td>{renderList()[7].crewType}</td>
                                </tr>
                                <tr>
                                    <td>{renderList()[8].memberName}</td>
                                    <td>{renderList()[8].ageGroup}</td>
                                    <td>{renderList()[8].crewType}</td>
                                </tr>
                                <tr>
                                    <td>{renderList()[9].memberName}</td>
                                    <td>{renderList()[9].ageGroup}</td>
                                    <td>{renderList()[9].crewType}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div> */}

                    {/*  */}
                    <div className='row-1'>
                        <div className='crews-table-container'>
                            <table>
                                <tbody>
                                    <tr className='table-header'>
                                        <th>Rower name</th>
                                        <th>Age group</th>
                                        <th>Crew type</th>
                                    </tr>
                                    <tr>
                                        <td>{renderList()[4].memberName}</td>
                                        <td>{renderList()[4].ageGroup}</td>
                                        <td>{renderList()[4].crewType}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className='crews-table-container'>
                            <table>
                                <tbody>
                                    <tr className='table-header'>
                                        <th>Rower name</th>
                                        <th>Age group</th>
                                        <th>Crew type</th>
                                    </tr>
                                    <tr>
                                        <td>{renderList()[5].memberName}</td>
                                        <td>{renderList()[5].ageGroup}</td>
                                        <td>{renderList()[5].crewType}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='row-2'>
                        <div className='crews-table-container'>
                            <table>
                                <tbody>
                                    <tr className='table-header'>
                                        <th>Rower name</th>
                                        <th>Age group</th>
                                        <th>Crew type</th>
                                    </tr>
                                    <tr>
                                        <td>{renderList()[6].memberName}</td>
                                        <td>{renderList()[6].ageGroup}</td>
                                        <td>{renderList()[6].crewType}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className='crews-table-container'>
                            <table>
                                <tbody>
                                    <tr className='table-header'>
                                        <th>Rower name</th>
                                        <th>Age group</th>
                                        <th>Crew type</th>
                                    </tr>
                                    <tr>
                                        <td>{renderList()[7].memberName}</td>
                                        <td>{renderList()[7].ageGroup}</td>
                                        <td>{renderList()[7].crewType}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='row-3'>
                        <div className='crews-table-container'>
                            <table>
                                <tbody>
                                    <tr className='table-header'>
                                        <th>Rower name</th>
                                        <th>Age group</th>
                                        <th>Crew type</th>
                                    </tr>
                                    <tr>
                                        <td>{renderList()[8].memberName}</td>
                                        <td>{renderList()[8].ageGroup}</td>
                                        <td>{renderList()[8].crewType}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className='crews-table-container'>
                            <table>
                                <tbody>
                                    <tr className='table-header'>
                                        <th>Rower name</th>
                                        <th>Age group</th>
                                        <th>Crew type</th>
                                    </tr>
                                    <tr>
                                        <td>{renderList()[0].memberName}</td>
                                        <td>{renderList()[0].ageGroup}</td>
                                        <td>{renderList()[0].crewType}</td>
                                    </tr>
                                    <tr>
                                        <td>{renderList()[1].memberName}</td>
                                        <td>{renderList()[1].ageGroup}</td>
                                        <td>{renderList()[1].crewType}</td>
                                    </tr>
                                    <tr>
                                        <td>{renderList()[2].memberName}</td>
                                        <td>{renderList()[2].ageGroup}</td>
                                        <td>{renderList()[2].crewType}</td>
                                    </tr>
                                    <tr>
                                        <td>{renderList()[3].memberName}</td>
                                        <td>{renderList()[3].ageGroup}</td>
                                        <td>{renderList()[3].crewType}</td>
                                    </tr>
                                    <tr>
                                        <td>{renderList()[9].memberName}</td>
                                        <td>{renderList()[9].ageGroup}</td>
                                        <td>{renderList()[9].crewType}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        );
    }
}

export default CrewLists;