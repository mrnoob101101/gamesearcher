import { Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { HeaderInner, HeaderStyled } from './Header.styled';

export const Header = () => {
  return (
    <HeaderStyled>
      <HeaderInner>
        <Link to={'/home'}>
          <Box mx={'2em'}>Home</Box>
        </Link>
        <Link to={'/main'}>
          <Box>Games list</Box>
        </Link>
      </HeaderInner>
    </HeaderStyled>
  );
};
