import React, { Component } from 'react'

import GameMenu from "./GameMenu";


export default class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isStarted: false,
        }
    }

    handleStartGame = () => {
        this.setState({ isStarted: true })
    }

    render() {
        return (
            <div>
                <h1>React Minesweeper</h1>
                <GameMenu 
                    started={this.state.isStarted}
                    startGame={this.handleStartGame}
                />
            </div>
        )
    }
}
