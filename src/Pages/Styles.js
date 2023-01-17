import React, { Component } from 'react';
import './Styles.css';

class Styles extends Component {
    render() {
        return (
            <div className='styles'>
                <div className='colours'>
                    <div className='background'>
                        <p>Background</p>
                        <p>#283740</p>
                    </div>
                    <div className='primary'>
                        <p>Primary</p>
                        <p>#94B6C2</p>
                    </div>
                    <div className='secondary'>
                        <p>Secondary</p>
                        <p>#B8B08C</p>
                    </div>
                    <div className='error'>
                        <p>Error</p>
                        <p>#BB9390</p>
                    </div>
                </div>
                <div className='buttons'></div>
            </div>
        );
    }
}

export default Styles;