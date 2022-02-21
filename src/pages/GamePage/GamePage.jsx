import { Game } from '../../components/Game/Game';
import { useSelector } from 'react-redux';
import { Error } from '../../components/Error/Error';
import React from 'react';

export const GamePage = () => {
  const status = useSelector((state) => state.games.status);
  if (status === 'error') {
    return <Error />;
  }
  return (
    <>
      <Game />
    </>
  );
};
