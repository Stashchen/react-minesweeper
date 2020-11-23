import React, { Component } from 'react'

export default class GameMenu extends Component {
    render() {
        return (
            <div>
                <p>{ this.props.isStarted }</p>
            </div>
        )
    }
}
