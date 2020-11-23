import React, { Component } from 'react'

export default class TestButton extends Component {
    constructor(props) {
        super(props);

        this.handleMouseDown = this.handleMouseDown.bind(this);

    }

    handleMouseDown(event) {
        // Check if you click right or left mouse buttons.
        if (event.button === 0) {
            console.log('left');
        } else if (event.button === 2) {
            console.log('right');
        }
        
    }

    render() {
        return (
            <div>
                <button onMouseDown={this.handleMouseDown}>Click me</button>
            </div>
        )
    }
}
