import ReactDOM from 'react-dom';
import React from 'react';
import './app.css';

//The object we are using for data
const players = [
  {
    name: 'Jared',
    score: '50',
    id: 1,
  },
  {
    name: 'Janice',
    score: '30',
    id: 2,
  },
  {
    name: 'Samantha',
    score: 49,
    id: 3,
  },
  {
    name: 'Lisa',
    score: 5,
    id: 4,
  },
  {
    name: 'Franker',
    score: 22,
    id: 5,
  },
  {
    name: 'Austin',
    score: 33,
    id: 6,
  },
];

//
const Header = (props) => {
  return (
    <header>
      {console.log(props)}
      <h1>{props.title}</h1>
      <span className="stats">Players: {props.totalPlayers}</span>
    </header>
  );
};

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      score: 0,
    };
  }

  incrementScore = () => {
    this.setState({
      score: this.state.score + 1,
    });
  };

  decrementScore = () => {
    this.setState({
      score: this.state.score - 1,
    });
  };

  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={this.decrementScore}>
          -
        </button>
        <span className="counter-score">{this.state.score}</span>
        <button className="counter-action increment" onClick={this.incrementScore}>
          +
        </button>
      </div>
    );
  }
}

const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">
        {props.playerKey}: {props.playerName}
      </span>
      <Counter />
    </div>
  );
};

const App = (props) => {
  return (
    <div className="scoreboard">
      <Header title="Scoreboard" totalPlayers={props.initialPlayers.length} />
      {props.initialPlayers.map((
        player //Remember use the player object!
      ) => (
        <Player playerName={player.name} playerKey={player.id} />
      ))}
    </div>
  );
};

ReactDOM.render(<App initialPlayers={players} />, document.getElementById('root'));
