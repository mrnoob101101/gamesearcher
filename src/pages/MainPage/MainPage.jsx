import { Filter } from '../../components/Filter/Filter';
import { GamesList } from '../../components/GamesList/GamesList';
import React from 'react';
import { Header } from '../../components/Header/Header';
import { useSelector } from 'react-redux';
import { Error } from '../../components/Error/Error';

export const MainPage = () => {
  const status = useSelector((state) => state.games.status);
  if (status === 'error') {
    return (
      <>
        <Header />
        <Filter />
        <Error />
      </>
    );
  }
  return (
    <>
      <Header />
      {/*<Search />*/}
      <Filter />
      <GamesList />
    </>
  );
};
