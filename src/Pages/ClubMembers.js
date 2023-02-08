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
                    <div className='table-container'>
                        <table>
                            <tbody>
                                <tr className='table-header'>
                                    <th>Rower name</th>
                                    <th>Age group</th>
                                    <th>Crew type</th>
                                </tr>
                                <tr>
                                    <td>Rower 1</td>
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
                                    <td>Rower 2</td>
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
                                    <td>Rower 3</td>
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
                                    <td>Rower 4</td>
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
                                    <td>Rower 5</td>
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
                                    <td>Rower 6</td>
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