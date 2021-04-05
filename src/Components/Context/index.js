import React from 'react';

//When using a Context API it will create a provider and a consumer
//these two will stay in constant communication and allows for passing props
//without having to use prop drilling or passing the props through every parent,
//child relation.

const ScoreboardContext = React.createContext();

export const Provider = ScoreboardContext.Provider;
export const Consumer = ScoreboardContext.Consumer;
