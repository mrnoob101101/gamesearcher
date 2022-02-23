import { Filter } from '../../components/Filter/Filter';
import { GamesList } from '../../components/GamesList/GamesList';
import React, { useState } from 'react';
import { Header } from '../../components/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { Error } from '../../components/Error/Error';
import { getGames } from '../../store/main/mainSlice';

export const MainPage = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.games.status);

  const [genreDropDownMenuPosition, setGenreDropDownMenuPosition] =
    useState(''); //Подъем состояния из компонента Filter
  const [platformDropDownMenuPosition, setPlatformDropDownMenuPosition] =
    useState('');
  let page = useSelector((state) => state.games.currentPageNumber);

  const handleClearFilters = () => {
    setGenreDropDownMenuPosition('');
    setPlatformDropDownMenuPosition('');
    dispatch(getGames(page));
  };

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
      <Header handleClearFilters={handleClearFilters} />
      <Filter
        genreDropDownMenuPosition={genreDropDownMenuPosition}
        platformDropDownMenuPosition={platformDropDownMenuPosition}
        setGenreDropDownMenuPosition={setGenreDropDownMenuPosition}
        setPlatformDropDownMenuPosition={setPlatformDropDownMenuPosition}
        handleClearFilters={handleClearFilters}
      />
      <GamesList />
    </>
  );
};
