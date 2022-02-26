import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { Flex } from '@chakra-ui/react';
import {
  getGames,
  getLastRequestedPage,
  getPaginationPageWithRequestedQueryParams
} from '../../store/main/mainSlice';
import { GameCard } from '../GameCard/GameCard';
import {
  ArrowBoxLeft,
  ArrowBoxRight,
  ArrowWrapper,
  CardsContainer,
  Warning
} from './GamesList.styled';
import { ReactComponent as ArrowRightIcon } from '../../assets/arrowRight.svg';
import { ReactComponent as ArrowLeftIcon } from '../../assets/arrowLeft.svg';
import { Pagination } from './Pagination/Pagination';
import { Loader } from '../Loader/Loader';
import {
  selectNextPageURL,
  selectPage,
  selectPreviousPageURL,
  selectResults
} from '../../store/main/selectors';

export const GamesList = () => {
  const dispatch = useDispatch();
  const games = useSelector((state) => state.games);
  const results = useSelector(selectResults);
  const nextPageURL = useSelector(selectNextPageURL);
  const previousPageURL = useSelector(selectPreviousPageURL);
  let page = useSelector(selectPage);

  useEffect(() => {
    if (games.selectedGenre || games.selectedPlatform || games.searchQuery) {
      dispatch(getLastRequestedPage(games.lastRequestURL));
    } else {
      dispatch(getGames(page));
    }
  }, [page]);

  const handleLoadNextPage = () => {
    page++;
    dispatch(getPaginationPageWithRequestedQueryParams(nextPageURL, page));
  };

  const handleLoadPreviousPage = () => {
    if (page > 1) {
      page--;
      dispatch(
        getPaginationPageWithRequestedQueryParams(previousPageURL, page)
      );
    }
  };

  if (results?.length === 0) {
    return <Warning>No results</Warning>;
  }

  if (games.status === 'loading') return <Loader />;
  if (games.status === 'success' && results.length !== 0) {
    return (
      <>
        <Flex justify={'center'}>
          <ArrowWrapper onClick={handleLoadPreviousPage}>
            <ArrowBoxLeft>
              <ArrowLeftIcon />
            </ArrowBoxLeft>
          </ArrowWrapper>
          <CardsContainer>
            {results.map((item) => {
              return (
                <GameCard
                  key={item.id}
                  image={item.background_image}
                  name={item.name}
                  id={item.id}
                  screenshots={item.short_screenshots}
                />
              );
            })}
          </CardsContainer>
          <ArrowWrapper onClick={handleLoadNextPage}>
            <ArrowBoxRight>
              <ArrowRightIcon />
            </ArrowBoxRight>
          </ArrowWrapper>
        </Flex>
        <Pagination
          handleLoadNextPage={handleLoadNextPage}
          handleLoadPreviousPage={handleLoadPreviousPage}
        />
      </>
    );
  } else return null;
};
