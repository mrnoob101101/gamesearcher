import { Introduce, Slogan } from './Home.styled';
import poster from '../../assets/kratos.jpg';
import { Box, Flex, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <Introduce background={poster}>
      <Slogan>
        <Flex>
          <Link to={'/main'}>
            <Text letterSpacing={'0.25em'}>SEARCH</Text>
          </Link>
        </Flex>

        <Flex>
          <Text fontSize={'1.5em'}>ANY</Text>
          <Box fontSize={'0.45em'} py={'0.3em'} px={'0.8em'} lineHeight={1}>
            <Text>game</Text>
            <Text>genre</Text>
            <Text>platform</Text>
          </Box>
        </Flex>
      </Slogan>
    </Introduce>
  );
};
