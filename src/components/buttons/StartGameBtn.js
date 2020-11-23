import React, { Component } from 'react'

export default class StartGameBtn extends Component {

    render() {
        return (
            <div>
                <button onClick={this.props.onClick}>Start new game</button>
            </div>
        )
    }
}
