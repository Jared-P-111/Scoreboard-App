import React from 'react';

const AddPlayerForm = ({ addPlayer }) => {
  //Synthetic functions that pass values up the hierarchy to App.
  let playerInput = React.createRef();

  let handleSubmit = (e) => {
    e.preventDefault();
    addPlayer(playerInput.current.value); //addPlayer is handleAddPlayer passed through props
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter a player's name" ref={playerInput} />
      <input value="Add Player" type="submit" />
    </form>
  );
};

export default AddPlayerForm;
