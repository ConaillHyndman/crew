import React, { Component } from 'react';
import './FormField.css';

class FormField extends Component {
    render() {
        return (
            <>
                <form className='formField'>
                    <div className='formFieldLabels'>
                        <label className='subtitle1'>{this.props.label}</label>
                        <label className='subtitle2 subText'>{this.props.subtext}</label>
                    </div>
                    <input type={this.props.type} className='input' />
                </form>
            </>
        );
    }
}

export default FormField;