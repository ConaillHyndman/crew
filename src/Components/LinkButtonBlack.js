import React, { Component } from 'react';
import { Button } from "react-bootstrap";
import "./LinkButtonBlack.css";



class LinkButtonBlack extends Component {
    render() {
        return (
            <>
                <Button
                    variant='Link'
                    className="linkButtonBlack"
                    onClick={this.props.onClick}>
                    <span id={this.props.spanId} className='button linkText'>
                        {this.props.text}
                    </span>
                </Button>
            </>
        );
    }
}

export default LinkButtonBlack;