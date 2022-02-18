import { Filter } from '../../components/Filter/Filter';
import { GamesList } from '../../components/GamesList/GamesList';
import React from 'react';
import { Header } from '../../components/Header/Header';

export const MainPage = () => {
  return (
    <>
      <Header />
      {/*<Search />*/}
      <Filter />
      <GamesList />
    </>
  );
};
