import { Game } from '../../components/Game/Game';
import { useSelector } from 'react-redux';
import { Error } from '../../components/Error/Error';
import React from 'react';
import { selectStatus } from '../../store/main/selectors';

export const GamePage = () => {
  const status = useSelector(selectStatus);

  if (status === 'error') {
    return <Error />;
  }
  return (
    <>
      <Game />
    </>
  );
};
