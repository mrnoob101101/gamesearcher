import { Flex } from '@chakra-ui/react';
import React from 'react';
import { getPaginationPageWithRequestedQueryParams } from '../../../store/main/mainSlice';
import { useDispatch, useSelector } from 'react-redux';
import { PaginationBackPage, PaginationCurrentPage, PaginationForwardPage } from './Pagination.styled';

export const Pagination = () => {
  const dispatch = useDispatch();
  const nextPageURL = useSelector((state) => state.games.gamesData.next);
  const previousPageURL = useSelector(state => state.games.gamesData.previous);
  let page = useSelector((state) => state.games.currentPage);

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

  const handleLoadTwoPagesBack = () => {
    if (page > 2) {
      page -= 2;
      dispatch(getPaginationPageWithRequestedQueryParams(previousPageURL, page));
    }
  };

  const handleLoadTwoPagesForward = () => {
    page += 2;
    dispatch(getPaginationPageWithRequestedQueryParams(nextPageURL, page));
  };

  return (
    <Flex justifyContent={'center'} bg={'black'}>

      <PaginationBackPage onClick={handleLoadTwoPagesBack} pagePropsForStyled={page - 2}>
        {page - 2}
      </PaginationBackPage>
      <PaginationBackPage onClick={handleLoadPreviousPage} pagePropsForStyled={page - 1}>
        {page - 1}
      </PaginationBackPage>
      <PaginationCurrentPage>
        {page}
      </PaginationCurrentPage>
      <PaginationForwardPage onClick={handleLoadNextPage} nextPageURL={nextPageURL}>
        {page + 1}
      </PaginationForwardPage>
      <PaginationForwardPage onClick={handleLoadTwoPagesForward} nextPageURL={nextPageURL}>
        {page + 2}
      </PaginationForwardPage>
    </Flex>
  );
};
