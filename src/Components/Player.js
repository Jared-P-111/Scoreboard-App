import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';
import Crown from './Crown';

class Player extends PureComponent {
  static propTypes = {
    changeScore: PropTypes.func,
    removePlayer: PropTypes.func,
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    id: PropTypes.number,
    index: PropTypes.number,
  };

  render() {
    const { id, score, playerName, changeScore, index, removePlayer, isHighScore } = this.props;

    return (
      <div className="player">
        <span className="player-name">
          <button
            className="remove-player"
            onClick={() => {
              return removePlayer(id);
            }}
          >
            x
          </button>
          <Crown isHighScore={isHighScore} />
          {playerName}
        </span>
        <Counter score={score} changeScore={changeScore} index={index} />
      </div>
    );
  }
}

export default Player;
