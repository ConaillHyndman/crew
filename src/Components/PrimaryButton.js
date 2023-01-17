import React, { Component } from 'react';
import { Button } from "react-bootstrap";
import "./PrimaryButton.css";

class PrimaryButton extends Component {
    render() {
        return (
            <>
                <Button
                    variant='primary'
                    className='primaryButton'
                    onClick={this.props.onClick}>
                    <span id={this.props.spanId} className='semibold'>
                        {this.props.text}
                    </span>
                </Button>
            </>
        );
    }
}

export default PrimaryButton;