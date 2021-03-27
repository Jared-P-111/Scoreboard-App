import React from 'react';
import Stats from './Stats';
import '../app.css';

const Header = (props) => {
  return (
    <header>
      <Stats className="stats" players={props.players} />
      <h1>{props.title}</h1>
    </header>
  );
};

export default Header;
