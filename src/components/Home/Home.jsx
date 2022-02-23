import { Introduce, Slogan, TextWrap } from './Home.styled';
import poster from '../../assets/kratos.jpg';
import { Flex, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { CarouselOfGameCards } from './CarouselOfGameCards/CarouselOfGameCards';

export const Home = () => {
  return (
    <>
      <Introduce background={poster}>
        <Slogan>
          <Flex>
            <Link to={'/main'}>
              <Text letterSpacing={'0.25em'}>SEARCH</Text>
            </Link>
          </Flex>
          <Flex>
            <Text fontSize={'1.5em'}>ANY</Text>
            <TextWrap>
              <Text>game</Text>
              <Text>genre</Text>
              <Text>platform</Text>
            </TextWrap>
          </Flex>
        </Slogan>
      </Introduce>
      <CarouselOfGameCards />
    </>
  );
};
