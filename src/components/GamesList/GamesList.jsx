import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { Button, Flex } from '@chakra-ui/react';
import { getGames } from '../../store/main/mainSlice';
import { GameCard } from '../GameCard/GameCard';
import { GameCardWrapper, Pagination } from './GamesList.styled';
import { Filter } from '../Filter/Filter';
import { store } from '../../store/store';
import axios from 'axios';

export const GamesList = () => {
  const dispatch = useDispatch();

  const results = useSelector((state) => state.games?.gamesData.results);
  const games = useSelector((state) => state.games);
  const state = useSelector((state) => state);
  console.log(games);
  console.log(state);
  let page = useSelector((state) => state.games.currentPage);
  console.log(store.getState());
  useEffect(() => {
    dispatch(getGames(page));
  }, [dispatch, page]);

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

  /*  axios.get('https://api.rawg.io/api/games', {
      params: {
        key: '58e43edf81094db9b034a89c52461039',
        genres: 'strategy',
        platforms: '21',
        search: '',
        search_exact: true,
        /!*search_precise: true,*!/
        ordering: '-metacritic'
      }
    })
      .then(function(response) {
        console.log('TEST_RESPONSE', response.data);
      })
      .catch(function(error) {
        console.log(error);
      });*/

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
          <Button onClick={() => handleLoadPreviousPage()}>Back</Button>
          <Pagination onClick={() => dispatch(getGames(page))}>
            {page}
          </Pagination>
          <Pagination onClick={() => dispatch(getGames(page + 1))}>
            {page + 1}
          </Pagination>
          <Pagination onClick={() => dispatch(getGames(page + 2))}>
            {page + 2}
          </Pagination>
          <Button onClick={() => handleLoadForwardPage()}>Forward</Button>
        </Flex>
      </>
    );
  } else return null;
};
