import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import {
  getGames,
  getLastRequestedPage, getPaginationPageWithRequestedQueryParams
} from '../../store/main/mainSlice';
import { GameCard } from '../GameCard/GameCard';
import {
  ArrowBoxLeft,
  ArrowBoxRight
} from './GamesList.styled';
import { ReactComponent as ArrowRightIcon } from '../../assets/arrowRight.svg';
import { ReactComponent as ArrowLeftIcon } from '../../assets/arrowLeft.svg';
import { Pagination } from './Pagination/Pagination';

export const GamesList = () => {
  const dispatch = useDispatch();

  const results = useSelector((state) => state.games?.gamesData.results);
  const games = useSelector((state) => state.games);
  const lastRequestURL = useSelector((state) => state.games.lastRequestURL);
  const nextPageURL = useSelector((state) => state.games.gamesData.next);
  const previousPageURL = useSelector(state => state.games.gamesData.previous);
  const state = useSelector(state => state);

  let page = useSelector((state) => state.games.currentPage);
  console.log('page', page);
  console.log('state', state);
  useEffect(() => {
    if (games.selectedGenre !== 'none' || games.selectedPlatform !== 'none') {
      dispatch(getLastRequestedPage(lastRequestURL));
    } else {
      dispatch(getGames(page));
    }
  }, []);

  const handleLoadNextPage = () => {
    page++;
    dispatch(getPaginationPageWithRequestedQueryParams(nextPageURL, page));
    console.log(page);
  };

  const handleLoadPreviousPage = () => {
    if (page > 1) {
      page--;
      dispatch(getPaginationPageWithRequestedQueryParams(previousPageURL, page));
      console.log(page);
      console.log('Prev page');
    }
  };

  if (games.status === 'success' && results.length !== 0) {
    return (
      <>
        <Flex justify={'center'}>
          <Box w={'3vw'} cursor={'pointer'} bg={'black'}
            onClick={handleLoadPreviousPage}>
            <ArrowBoxLeft>
              <ArrowLeftIcon />
            </ArrowBoxLeft>
          </Box>
          <Flex
            justifyContent={'space-around'}
            flexWrap={'wrap'}
            backgroundColor={'black'}
            minH={'90vh'}
            w={'94vw'}
            transform={'perspective(400px)'}

          >
            {results.map((item) => {
              return (
                /*<GameCardWrapper >*/
                <GameCard
                  key={item.id}
                  image={item.background_image}
                  name={item.name}
                  id={item.id}
                  screenshots={item.short_screenshots}
                />
                /*</GameCardWrapper>*/
              );
            })}
          </Flex>
          <Box w={'3vw'} cursor={'pointer'} bg={'black'}
            onClick={handleLoadNextPage}>
            <ArrowBoxRight>
              <ArrowRightIcon />
            </ArrowBoxRight>
          </Box>
        </Flex>
        <Pagination />
      </>
    );
  }
  if (results.length === 0) {
    return (
      <Box bg={'black'} fontSize={'10em'} minH={'90vh'} textAlign={'center'}>No
        results</Box>
    );
  } else return null;
};
