import { Link } from 'react-router-dom';
import {
  HeaderInner,
  HeaderQueries,
  HeaderStyled,
  Icon,
  Logo
} from './Header.styled';
import { ReactComponent as Gamepad } from '../../assets/gamepad.svg';
import { ReactComponent as Star } from '../../assets/star.svg';
import { Flex } from '@chakra-ui/react';
import { Search } from '../Search/Search';

export const Header = ({ handleClearFilters }) => {
  return (
    <HeaderStyled>
      <Logo to={'/'}>
        <Gamepad />
      </Logo>
      <HeaderInner>
        <Flex justify={'space-between'}>
          <Link to={'/home'}>
            <HeaderQueries>Home</HeaderQueries>
          </Link>
          <Link to={'/main'}>
            <HeaderQueries>Games list</HeaderQueries>
          </Link>
          <Icon to={'/favorites'}>
            <Star />
          </Icon>
        </Flex>
        <Search handleClearFilters={handleClearFilters} />
      </HeaderInner>
    </HeaderStyled>
  );
};
