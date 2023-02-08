import React, { Component } from 'react';
import { Button } from "react-bootstrap";
import "./LinkButtonWhite.css";



class LinkButtonWhite extends Component {
    render() {
        return (
            <>
                <Button
                    variant='Link'
                    className="linkButtonWhite"
                    onClick={this.props.onClick}>
                    <span id={this.props.spanId} className='button linkText'>
                        {this.props.text}
                    </span>
                </Button>
            </>
        );
    }
}

export default LinkButtonWhite;