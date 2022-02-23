import { Filter } from '../../components/Filter/Filter';
import { GamesList } from '../../components/GamesList/GamesList';
import React, { useState } from 'react';
import { Header } from '../../components/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { Error } from '../../components/Error/Error';
import { getGames } from '../../store/main/mainSlice';
import { selectPage, selectStatus } from '../../store/main/selectors';

export const MainPage = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);
  let page = useSelector(selectPage);

  const [genreDropDownMenuPosition, setGenreDropDownMenuPosition] =
    useState(''); //Подъем состояния из компонента Filter
  const [platformDropDownMenuPosition, setPlatformDropDownMenuPosition] =
    useState('');

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
