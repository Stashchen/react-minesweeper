import React, { Component } from 'react'

import StartGameBtn from './buttons/StartGameBtn'


export default class GameMenu extends Component {
    render() {
        return (
            <div>
                { this.props.started ?
                    'Game is started' :
                    <StartGameBtn onClick={this.props.startGame} /> 
                }
            </div>
        )
    }
}
