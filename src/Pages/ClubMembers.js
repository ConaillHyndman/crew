import React, { Component } from 'react';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import LinkButtonBlack from '../Components/LinkButtonBlack';
import "./ClubMembers.css";

const onViewMemberButtonClick = () => {
    const link = "/member-account";
    window.location.assign(link);
};

const onBackButtonClick = () => {
    window.history.back();
};

const onAddMemberButtonClick = () => {
    const link = "/add-member";
    window.location.assign(link);
};

const GET = "http://localhost:3001/club-members/6443cccaa8ffe74b4a9a1e36";

console.log(GET.json);

class ClubMembers extends Component {
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
                            <LinkButtonBlack
                                text="+ Add member"
                                onClick={onAddMemberButtonClick}
                            />
                            <tbody>
                                <tr className='table-header'>
                                    <th>Rower name</th>
                                    <th>Age group</th>
                                    <th>Crew type</th>
                                </tr>
                                <tr>
                                    <td>John Smith</td>
                                    <td>Under 12s</td>
                                    <td>Mixed</td>
                                    <td>
                                        <LinkButtonBlack
                                            text="View >"
                                            onClick={onViewMemberButtonClick}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Christopher Robin</td>
                                    <td>Under 14s</td>
                                    <td>Males</td>
                                    <td>
                                        <LinkButtonBlack
                                            text="View >"
                                            onClick={onViewMemberButtonClick}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>James Bond</td>
                                    <td>Under 16s</td>
                                    <td>Mixed</td>
                                    <td>
                                        <LinkButtonBlack
                                            text="View >"
                                            onClick={onViewMemberButtonClick}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>David Rose</td>
                                    <td>Under 18s</td>
                                    <td>Males</td>
                                    <td>
                                        <LinkButtonBlack
                                            text="View >"
                                            onClick={onViewMemberButtonClick}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Joey Tribiani</td>
                                    <td>Under 21s</td>
                                    <td>Mixed</td>
                                    <td>
                                        <LinkButtonBlack
                                            text="View >"
                                            onClick={onViewMemberButtonClick}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Phoebe Buffey</td>
                                    <td>Veterans</td>
                                    <td>Females</td>
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