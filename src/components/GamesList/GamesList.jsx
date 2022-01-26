import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { Box, Button, Flex } from '@chakra-ui/react';
import { getGames } from '../../store/main/mainSlice';
import { GameCard } from '../GameCard/GameCard';
import { Pagination } from './GamesList.styled';

export const GamesList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGames(page));
  }, []);

  const results = useSelector((state) => state.games?.gamesData.results);
  const games = useSelector((state) => state.games);
  console.log(games);
  let page = useSelector((state) => state.games?.currentPage);

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
              <Box
                key={item.name}
                m={'1vw'}
                backgroundColor={'#00728c'}
                borderRadius={'10px'}
                overflow={'hidden'}
                border={'solid 1px white'}
              >
                <GameCard
                  image={item.background_image}
                  name={item.name}
                  id={item.id}
                  screenshots={item.short_screenshots}
                />
              </Box>
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
