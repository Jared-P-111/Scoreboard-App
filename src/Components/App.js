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
          name: 'Samantha',
          score: 0,
          id: 3,
        },
        {
          name: 'Lisa',
          score: 0,
          id: 4,
        },
        {
          name: 'Franker',
          score: 0,
          id: 5,
        },
        {
          name: 'Austin',
          score: 0,
          id: 6,
        },
      ],
    };
  }

  handleScoreChange = (index, delta) => {
    console.log('You clicked: ', this.state.players[index].name);
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
    this.setState({
      players: [
        ...this.state.players,
        {
          name,
          score: 0,
          id: (this.prevPlayerId += 1),
        },
      ],
    });
  };

  render() {
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
          />
        ))}
        <AddPlayerForm addPlayer={this.handleAddPlayer} />
      </div>
    );
  }
}

export default App;
