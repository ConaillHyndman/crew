import React, { Component } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import PrimaryButton from '../Components/PrimaryButton';

class Home extends Component {
    render() {
        return (
            <>
            <Header />
                <div className='contentContainer'>
                    <h1 className='h2'>main header</h1>
                    <p>paragraph</p>
                    <PrimaryButton
                    text="Crews"
                    />
                    <PrimaryButton
                    text="My Club"
                    />
                </div>
                <Footer />
            </>
        );
    }
}

export default Home;