import React from 'react';
import AddPlayerForm from './AddPlayerForm';
import Header from './Header';
import Player from './Player';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: [
        {
          name: 'Jared',
          score: 0,
          id: 1,
        },
        {
          name: 'Janice',
          score: 0,
          id: 2,
        },
        {
          name: 'Aubrey',
          score: 0,
          id: 3,
        },
        {
          name: 'Darian',
          score: 0,
          id: 4,
        },
        {
          name: 'Austin',
          score: 0,
          id: 5,
        },
      ],
    };
  }

  prevPlayerId = () => {
    let lastPlayer = this.state.players.length + 1;
    return lastPlayer;
  };

  handleScoreChange = (index, delta) => {
    this.setState((prevState) => ({
      score: (prevState.players[index].score += delta),
    }));
  };

  handleRemovePlayer = (id) => {
    this.setState((prevState) => {
      return { players: prevState.players.filter((person) => person.id !== id) };
    });
  };

  handleAddPlayer = (name) => {
    this.setState((prevState) => {
      return {
        players: [
          ...prevState.players,
          {
            name,
            score: 0,
            id: this.prevPlayerId(),
          },
        ],
      };
    });
  };

  handleHighScore = () => {
    const scores = this.state.players.map((p) => p.score);
    const highScore = Math.max(...scores);
    if (highScore) {
      return highScore;
    }
    return null;
  };

  render() {
    const highScore = this.handleHighScore();

    return (
      <div className="scoreboard">
        <Header title="Scoreboard" players={this.state.players} />

        {this.state.players.map((player, index) => (
          <Player
            playerName={player.name}
            score={player.score}
            id={player.id}
            playerKey={player.id}
            index={index}
            changeScore={this.handleScoreChange}
            removePlayer={this.handleRemovePlayer}
            isHighScore={highScore === player.score}
          />
        ))}
        <AddPlayerForm addPlayer={this.handleAddPlayer} />
      </div>
    );
  }
}

export default App;
