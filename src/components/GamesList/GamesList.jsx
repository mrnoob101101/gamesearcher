import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { Button, Flex } from '@chakra-ui/react';
import {
  getGames,
  getLastRequestedPage,
} from '../../store/main/mainSlice';
import { GameCard } from '../GameCard/GameCard';
import { GameCardWrapper, Pagination } from './GamesList.styled';

import { store } from '../../store/store';


export const GamesList = () => {
  const dispatch = useDispatch();

  const results = useSelector((state) => state.games?.gamesData.results);
  const games = useSelector((state) => state.games);
  const lastRequestURL = useSelector((state) => state.games.lastRequestURL);
  console.log(games);

  let page = useSelector((state) => state.games.currentPage);
  console.log(store.getState());

  useEffect(() => {
    if (games.selectedGenre !== 'none' || games.selectedPlatform !== 'none') {
      dispatch(getLastRequestedPage(lastRequestURL));
    } else {
      dispatch(getGames(page));
    }
  }, []);

  const handleLoadForwardPage = () => {
    page++;
    dispatch(getGames(page));
    console.log(page);
  };

  const handleLoadPreviousPage = () => {
    if (page > 1) {
      page--;
      dispatch(getGames(page));
      console.log(page);
      console.log('Prev page');
    }
  };
  console.log(`Внешний лог ${page}`);

  if (games.status === 'success') {
    return (
      <>
        <Flex
          justifyContent={'space-around'}
          flexWrap={'wrap'}
          backgroundColor={'black'}
        >
          {results.map((item) => {
            return (
              <GameCardWrapper key={item.name}>
                <GameCard
                  image={item.background_image}
                  name={item.name}
                  id={item.id}
                  screenshots={item.short_screenshots}
                />
              </GameCardWrapper>
            );
          })}
        </Flex>
        <Flex justifyContent={'center'}>
          <Button onClick={handleLoadPreviousPage}>Back</Button>
          <Pagination onClick={() => dispatch(getGames(page))}>
            {page}
          </Pagination>
          <Pagination onClick={() => dispatch(getGames(page + 1))}>
            {page + 1}
          </Pagination>
          <Pagination onClick={() => dispatch(getGames(page + 2))}>
            {page + 2}
          </Pagination>
          <Button onClick={handleLoadForwardPage}>Forward</Button>
        </Flex>
      </>
    );
  } else return null;
};
