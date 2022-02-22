import { Box, Button, ChakraProvider, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  DescriptionText,
  Developer,
  GameInfo,
  Genre,
  MainText,
  Metascore,
  Website,
} from './Game.styled';
import { Carousel } from './Carousel/Carousel';
import React from 'react';
import {
  selectBackground,
  selectDescription,
  selectGenres,
  selectMetacriticScore,
  selectName,
  selectReleaseDate,
  selectWebsite,
} from '../../store/main/selectors';
import {
  addToFavorite,
  deleteFromFavorite,
} from '../../store/favorite/favoriteSlice';
import { Loader } from '../Loader/Loader';

export const Game = () => {
  const dispatch = useDispatch();
  const website = useSelector(selectWebsite);
  const metacriticScore = useSelector(selectMetacriticScore);
  const name = useSelector(selectName);
  const description = useSelector(selectDescription);
  const background = useSelector(selectBackground);
  const genres = useSelector(selectGenres);
  const releaseDate = useSelector(selectReleaseDate);
  const id = useSelector((state) => state.games.game.id);
  const game = useSelector((state) => state.games.game);
  const status = useSelector((state) => state.games.status);
  const results = useSelector((state) => state.games.gamesData.results);
  const favoriteGamesList = useSelector(
    (state) => state.favorite.favoriteGames
  );

  const isFavorite =
    favoriteGamesList.findIndex((item) => item.id === id) !== -1;

  const handleAddToFavorites = () => {
    const favoriteGame = results.filter((game) => game.id === id);
    if (isFavorite) {
      dispatch(deleteFromFavorite(id));
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
          <GameInfo background={background}>
            <Link to="/main">
              <Button m={'2vw'} colorScheme="teal">
                Back
              </Button>
            </Link>
            <MainText>
              {name}
              <Metascore>Metascore: {metacriticScore}</Metascore>
            </MainText>
            <DescriptionText>{description}</DescriptionText>
            <Button m={'3vw'} colorScheme="red" onClick={handleAddToFavorites}>
              {favoriteButtonText} favorite
            </Button>
          </GameInfo>
          <Carousel />
          <Box background={'black'} textColor={'white'} px={'1vw'}>
            <Text px={'20px'}>
              {game.developers.map((item) => {
                return <Developer key={item.id}> {item.name}</Developer>;
              })}
            </Text>
            <Text p={'20px'}>Released: {releaseDate}</Text>
            {genres.map((item) => {
              return <Genre key={item.id}>{item.name}</Genre>;
            })}
            <Website href={`${website}`}>{website}</Website>
          </Box>
        </ChakraProvider>
      </>
    );
  } else return null;
};
