import React from 'react';

const Counter = (props) => {
  //Set state is used to make the state more reliable due to asynchronous behavior of state.

  let index = props.index;

  return (
    <div className="counter">
      <button className="counter-action decrement" onClick={() => props.changeScore(index, -1)}>
        -
      </button>
      <span className="counter-score">{props.score}</span>
      <button className="counter-action increment" onClick={() => props.changeScore(index, 1)}>
        +
      </button>
    </div>
  );
};

export default Counter;
