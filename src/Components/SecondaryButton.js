import React, { Component } from 'react';
import { Button } from "react-bootstrap";
import "./SecondaryButton.css";



class SecondaryButton extends Component {
    render() {
        return (
            <>
                <Button
                    variant='secondary'
                    className='secondaryButton'
                    onClick={this.props.onClick}>
                    <span id={this.props.spanId} className='semibold'>
                        {this.props.text}
                    </span>
                </Button>
            </>
        );
    }
}

export default SecondaryButton;