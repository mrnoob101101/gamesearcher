import { Box, Button, ChakraProvider, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  DescriptionText,
  GameInfo,
  Genre,
  Metascore,
  Overview,
  Website,
} from './Game.styled';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Carousel } from './Carousel/Carousel';
import React from 'react';
import {
  selectBackground,
  selectDescription,
  selectGenres,
  selectMetacriticScore,
  selectName,
  selectWebsite,
} from '../../store/main/selectors';

export const Game = () => {
  const website = useSelector((state) => selectWebsite(state));
  const metacriticScore = useSelector((state) => selectMetacriticScore(state));
  const name = useSelector((state) => selectName(state));
  const description = useSelector((state) => selectDescription(state));
  const background = useSelector((state) => selectBackground(state));
  const genres = useSelector((state) => selectGenres(state));
  const status = useSelector((state) => state.games.status);

  if (status === 'success') {
    return (
      <>
        <ChakraProvider>
          <GameInfo background={background}>
            <Link to="/">
              <Button m={'3vw'} colorScheme="teal">
                Back
              </Button>
            </Link>
            <Text
              px={'5vw'}
              fontSize="6xl"
              color="white"
              backgroundColor={'#00728c99'}
            >
              {name}
              <Metascore>Metascore: {metacriticScore}</Metascore>
            </Text>
            <Overview>
              <DescriptionText>{description}</DescriptionText>
            </Overview>
          </GameInfo>
          <Carousel />
          <Box background={'#3b3a3f'} textColor={'white'} px={'1vw'}>
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
