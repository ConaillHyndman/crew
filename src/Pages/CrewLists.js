import React, { Component } from 'react';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import LinkButtonBlack from '../Components/LinkButtonBlack';
import './CrewLists.css'

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
                                        <td>John Smith</td>
                                        <td>Under 12s</td>
                                        <td>Mixed</td>
                                    </tr>
                                    <tr>
                                        <td>Christopher Robin</td>
                                        <td>Under 12s</td>
                                        <td>Males</td>
                                    </tr>
                                    <tr>
                                        <td>James Bond</td>
                                        <td>Under 12s</td>
                                        <td>Mixed</td>
                                    </tr>
                                    <tr>
                                        <td>David Rose</td>
                                        <td>Under 12s</td>
                                        <td>Males</td>
                                    </tr>
                                    <tr>
                                        <td>Joey Tribiani</td>
                                        <td>Under 12s</td>
                                        <td>Mixed</td>
                                    </tr>
                                    <tr>
                                        <td>Phoebe Buffey</td>
                                        <td>Under 12s</td>
                                        <td>Females</td>
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
                                        <td>John Smith</td>
                                        <td>Under 14s</td>
                                        <td>Mixed</td>
                                    </tr>
                                    <tr>
                                        <td>Christopher Robin</td>
                                        <td>Under 14s</td>
                                        <td>Males</td>
                                    </tr>
                                    <tr>
                                        <td>James Bond</td>
                                        <td>Under 14s</td>
                                        <td>Mixed</td>
                                    </tr>
                                    <tr>
                                        <td>David Rose</td>
                                        <td>Under 14s</td>
                                        <td>Males</td>
                                    </tr>
                                    <tr>
                                        <td>Joey Tribiani</td>
                                        <td>Under 14s</td>
                                        <td>Mixed</td>
                                    </tr>
                                    <tr>
                                        <td>Phoebe Buffey</td>
                                        <td>Under 14s</td>
                                        <td>Females</td>
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
                                        <td>John Smith</td>
                                        <td>Under 16s</td>
                                        <td>Mixed</td>
                                    </tr>
                                    <tr>
                                        <td>Christopher Robin</td>
                                        <td>Under 16s</td>
                                        <td>Males</td>
                                    </tr>
                                    <tr>
                                        <td>James Bond</td>
                                        <td>Under 16s</td>
                                        <td>Mixed</td>
                                    </tr>
                                    <tr>
                                        <td>David Rose</td>
                                        <td>Under 16s</td>
                                        <td>Males</td>
                                    </tr>
                                    <tr>
                                        <td>Joey Tribiani</td>
                                        <td>Under 16s</td>
                                        <td>Mixed</td>
                                    </tr>
                                    <tr>
                                        <td>Phoebe Buffey</td>
                                        <td>Under 16s</td>
                                        <td>Females</td>
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
                                        <td>John Smith</td>
                                        <td>Under 18s</td>
                                        <td>Mixed</td>
                                    </tr>
                                    <tr>
                                        <td>Christopher Robin</td>
                                        <td>Under 18s</td>
                                        <td>Males</td>
                                    </tr>
                                    <tr>
                                        <td>James Bond</td>
                                        <td>Under 18s</td>
                                        <td>Mixed</td>
                                    </tr>
                                    <tr>
                                        <td>David Rose</td>
                                        <td>Under 18s</td>
                                        <td>Males</td>
                                    </tr>
                                    <tr>
                                        <td>Joey Tribiani</td>
                                        <td>Under 18s</td>
                                        <td>Mixed</td>
                                    </tr>
                                    <tr>
                                        <td>Phoebe Buffey</td>
                                        <td>Under 18s</td>
                                        <td>Females</td>
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
                                        <td>John Smith</td>
                                        <td>Under 21s</td>
                                        <td>Mixed</td>
                                    </tr>
                                    <tr>
                                        <td>Christopher Robin</td>
                                        <td>Under 21s</td>
                                        <td>Males</td>
                                    </tr>
                                    <tr>
                                        <td>James Bond</td>
                                        <td>Under 21s</td>
                                        <td>Mixed</td>
                                    </tr>
                                    <tr>
                                        <td>David Rose</td>
                                        <td>Under 21s</td>
                                        <td>Males</td>
                                    </tr>
                                    <tr>
                                        <td>Joey Tribiani</td>
                                        <td>Under 21s</td>
                                        <td>Mixed</td>
                                    </tr>
                                    <tr>
                                        <td>Phoebe Buffey</td>
                                        <td>Under 21s</td>
                                        <td>Females</td>
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
                                        <td>John Smith</td>
                                        <td>Veterans</td>
                                        <td>Mixed</td>
                                    </tr>
                                    <tr>
                                        <td>Christopher Robin</td>
                                        <td>Veterans</td>
                                        <td>Males</td>
                                    </tr>
                                    <tr>
                                        <td>James Bond</td>
                                        <td>Veterans</td>
                                        <td>Mixed</td>
                                    </tr>
                                    <tr>
                                        <td>David Rose</td>
                                        <td>Veterans</td>
                                        <td>Males</td>
                                    </tr>
                                    <tr>
                                        <td>Joey Tribiani</td>
                                        <td>Veterans</td>
                                        <td>Mixed</td>
                                    </tr>
                                    <tr>
                                        <td>Phoebe Buffey</td>
                                        <td>Veterans</td>
                                        <td>Females</td>
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