import { Button, ChakraProvider, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  DescriptionText,
  Developer,
  GameDetails,
  GameInfo,
  Genre,
  MainText,
  Metascore,
  Website
} from './Game.styled';
import { CarouselOfScreenshots } from './Carousel/CarouselOfScreenshots';
import React from 'react';
import {
  selectGame,
  selectResults,
  selectStatus
} from '../../store/main/selectors';
import {
  addToFavorite,
  deleteFromFavorite
} from '../../store/favorite/favoriteSlice';
import { Loader } from '../Loader/Loader';

export const Game = () => {
  const dispatch = useDispatch();
  const game = useSelector(selectGame);
  const status = useSelector(selectStatus);
  const results = useSelector(selectResults);

  const favoriteGamesList = useSelector(
    (state) => state.favorite.favoriteGames
  );
  const isFavorite =
    favoriteGamesList.findIndex((item) => item.id === game.id) !== -1;
  const handleAddToFavorites = () => {
    const favoriteGame = results.filter((item) => item.id === game.id);
    if (isFavorite) {
      dispatch(deleteFromFavorite(game.id));
    } else dispatch(addToFavorite(favoriteGame));
  };
  let favoriteButtonText;
  isFavorite
    ? (favoriteButtonText = 'Delete from')
    : (favoriteButtonText = 'Add to');

  if (status === 'loading') return <Loader />;
  if (status === 'success') {
    return (
      <>
        <ChakraProvider>
          <GameInfo background={game.background_image}>
            <Link to="/main">
              <Button m={'2vw'} colorScheme="teal">
                Back
              </Button>
            </Link>
            <MainText>
              {game.name}
              <Metascore>Metascore: {game.metacritic}</Metascore>
            </MainText>
            <DescriptionText>{game.description_raw}</DescriptionText>
            <Button m={'3vw'} colorScheme="red" onClick={handleAddToFavorites}>
              {favoriteButtonText} favorite
            </Button>
          </GameInfo>
          <CarouselOfScreenshots />
          <GameDetails>
            <Text px={'20px'}>
              {game.developers.map((item) => {
                return <Developer key={item.id}> {item.name}</Developer>;
              })}
            </Text>
            <Text p={'20px'}>Released: {game.released}</Text>
            {game.genres.map((item) => {
              return <Genre key={item.id}>{item.name}</Genre>;
            })}
            <Website href={`${game.website}`}>{game.website}</Website>
          </GameDetails>
        </ChakraProvider>
      </>
    );
  } else return null;
};
