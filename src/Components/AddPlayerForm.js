import React, { Component } from 'react';

class AddPlayerForm extends Component {
  state = {
    value: '',
  };
  //Synthetic functions that pass values up the hierarchy to App.

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addPlayer(this.state.value); //addPlayer is handleAddPlayer passed through props
    this.setState({ value: '' });
  };

  handleValueChange = (e) => {
    this.setState({ value: e.target.value });
  };

  render() {
    console.log(this.state.value);
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Enter a player's name"
          value={this.state.value}
          onChange={this.handleValueChange}
        />
        <input value="Add Player" type="submit" />
      </form>
    );
  }
}

export default AddPlayerForm;
