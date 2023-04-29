import React, { Component } from 'react';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import LinkButtonBlack from '../Components/LinkButtonBlack';
import "./ClubMembers.css";
import clubMemberData from '../Assets/content/club.json'

let arrayPath = clubMemberData.clubs[0].carnlough[0].path || clubMemberData.clubs[0].cairndhu[0].path;

const onViewMemberButtonClick = () => {
    const link = "/member-account" + arrayPath;
    window.location.assign(link);
};

const onBackButtonClick = () => {
    window.history.back();
};

const onAddMemberButtonClick = () => {
    const link = "/add-member" + arrayPath;
    window.location.assign(link);
};

function renderList() {
    if (window.location.pathname === "/club-members/carnlough") {
        // return clubMemberData.clubs[1].member
        return clubMemberData.clubs[0].carnlough[0].member[0]
    } else {
        return clubMemberData.clubs[0].carnlough[0].member[0]
    }
}

// const GET = fetch("http://localhost:3001/club-members/6443cccaa8ffe74b4a9a1e36", { mode: 'no-cors' });
// const GET = "http://localhost:3001/club-members/6443cccaa8ffe74b4a9a1e36";
// const data = GET.json;
// console.log([data]);

// const express = require('express');
// const mongoose = require("mongoose");
// const app = express();
// const uri = "mongodb+srv://conaillhyndman:Cromlough14@crewpluscluster.iptdgiv.mongodb.net/?retryWrites=true&w=majority";

// const GET = "http://localhost:3001/club-members/6443cccaa8ffe74b4a9a1e36";

// mongoose.connect(uri)
//     .then(() => {
//         console.log("Connected to mongodb");
//         app.listen(3001, () => {
//             console.log("Node API app us running on port 3001");
//             fetch(GET)
//                 .then(response => {
//                     return response.json();
//                 })
//                 .then(d => {
//                     console.log(d);
//                 })
//         })
//     }).catch((error) => {
//         console.log(error);
//     });

class ClubMembers extends Component {

    // constructor() {
    //     super();
    //     this.state = {
    //         _id: [{}],
    //         clubName: [{}],
    //         memberName: [{}],
    //         ageGroup: [{}],
    //         crewType: [{}],
    //         createdAt: [{}],
    //         updatedAt: [{}],
    //         __v: [{}],
    //     }
    // }
    // componentDidMount() {
    //     fetch(GET)
    //         .then(response => {
    //             return response.json();
    //         })
    //         .then(d => {
    //             this.setState({ clubName: d });
    //             console.log(this.state.clubName);
    //         })
    // }

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
                    <h1 className='h2'>Club members</h1>
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
                                    <td>{renderList().memberName}</td>
                                    <td>{renderList().ageGroup}</td>
                                    <td>{renderList().crewType}</td>
                                    <td>
                                        <LinkButtonBlack
                                            text="View >"
                                            onClick={onViewMemberButtonClick}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>{renderList().memberName}</td>
                                    <td>{renderList().ageGroup}</td>
                                    <td>{renderList().crewType}</td>
                                    <td>
                                        <LinkButtonBlack
                                            text="View >"
                                            onClick={onViewMemberButtonClick}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>{renderList().memberName}</td>
                                    <td>{renderList().ageGroup}</td>
                                    <td>{renderList().crewType}</td>
                                    <td>
                                        <LinkButtonBlack
                                            text="View >"
                                            onClick={onViewMemberButtonClick}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>{renderList().memberName}</td>
                                    <td>{renderList().ageGroup}</td>
                                    <td>{renderList().crewType}</td>
                                    <td>
                                        <LinkButtonBlack
                                            text="View >"
                                            onClick={onViewMemberButtonClick}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>{renderList().memberName}</td>
                                    <td>{renderList().ageGroup}</td>
                                    <td>{renderList().crewType}</td>
                                    <td>
                                        <LinkButtonBlack
                                            text="View >"
                                            onClick={onViewMemberButtonClick}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>{renderList().memberName}</td>
                                    <td>{renderList().ageGroup}</td>
                                    <td>{renderList().crewType}</td>
                                    <td>
                                        <LinkButtonBlack
                                            text="View >"
                                            onClick={onViewMemberButtonClick}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>{renderList().memberName}</td>
                                    <td>{renderList().ageGroup}</td>
                                    <td>{renderList().crewType}</td>
                                    <td>
                                        <LinkButtonBlack
                                            text="View >"
                                            onClick={onViewMemberButtonClick}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>{renderList().memberName}</td>
                                    <td>{renderList().ageGroup}</td>
                                    <td>{renderList().crewType}</td>
                                    <td>
                                        <LinkButtonBlack
                                            text="View >"
                                            onClick={onViewMemberButtonClick}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>{renderList().memberName}</td>
                                    <td>{renderList().ageGroup}</td>
                                    <td>{renderList().crewType}</td>
                                    <td>
                                        <LinkButtonBlack
                                            text="View >"
                                            onClick={onViewMemberButtonClick}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>{renderList().memberName}</td>
                                    <td>{renderList().ageGroup}</td>
                                    <td>{renderList().crewType}</td>
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

export default ClubMembers;