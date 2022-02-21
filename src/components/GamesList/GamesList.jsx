import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import {
  getGames,
  getLastRequestedPage,
  getPaginationPageWithRequestedQueryParams,
} from '../../store/main/mainSlice';
import { GameCard } from '../GameCard/GameCard';
import { ArrowBoxLeft, ArrowBoxRight } from './GamesList.styled';
import { ReactComponent as ArrowRightIcon } from '../../assets/arrowRight.svg';
import { ReactComponent as ArrowLeftIcon } from '../../assets/arrowLeft.svg';
import { Pagination } from './Pagination/Pagination';
import { Loader } from '../Loader/Loader';

export const GamesList = () => {
  const dispatch = useDispatch();

  const gamesData = useSelector((state) => state.games.gamesData);
  const games = useSelector((state) => state.games);
  const nextPageURL = useSelector((state) => state.games.gamesData.next);
  const previousPageURL = useSelector(
    (state) => state.games.gamesData.previous
  );
  const state = useSelector((state) => state);

  let page = useSelector((state) => state.games.currentPage);
  console.log('page', page);
  console.log('state', state);

  console.log('selectedGenre', games.selectedGenre !== '');
  console.log('selectedPlatform', games.selectedPlatform !== '');
  console.log(
    'RRRRRRRR',
    games.selectedGenre !== '' || games.selectedPlatform !== ''
  );

  useEffect(() => {
    console.log('GGGGGGGG', games.selectedGenre);
    if (games.selectedGenre !== '' || games.selectedPlatform !== '') {
      dispatch(getLastRequestedPage(games.lastRequestURL));
    } else {
      dispatch(getGames(page));
    }
  }, [page]);

  const handleLoadNextPage = () => {
    page++;
    dispatch(getPaginationPageWithRequestedQueryParams(nextPageURL, page));
    console.log(page);
  };

  const handleLoadPreviousPage = () => {
    if (page > 1) {
      page--;
      dispatch(
        getPaginationPageWithRequestedQueryParams(previousPageURL, page)
      );
      console.log(page);
      console.log('Prev page');
    }
  };

  if (games.status === 'loading') return <Loader />;
  if (games.status === 'success' && gamesData.results.length !== 0) {
    return (
      <>
        <Flex justify={'center'}>
          <Box
            w={'3vw'}
            cursor={'pointer'}
            bg={'black'}
            onClick={handleLoadPreviousPage}
          >
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
          >
            {gamesData.results.map((item) => {
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
          <Box
            w={'3vw'}
            cursor={'pointer'}
            bg={'black'}
            onClick={handleLoadNextPage}
          >
            <ArrowBoxRight>
              <ArrowRightIcon />
            </ArrowBoxRight>
          </Box>
        </Flex>
        <Pagination
          handleLoadNextPage={handleLoadNextPage}
          handleLoadPreviousPage={handleLoadPreviousPage}
        />
      </>
    );
  } else return null;
  /* if (gamesData.results.length === 0) {
     return (
       <Box bg={'black'} fontSize={'10em'} minH={'90vh'} textAlign={'center'}>
         No results
       </Box>
     );
   } else return null;*/
};
