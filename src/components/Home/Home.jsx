import { Introduce, Slogan } from './Home.styled';
import poster from '../../assets/playstation-gamepad.jpg';
import { Box, Flex, Text } from '@chakra-ui/react';

export const Home = () => {
  return (
    <Introduce background={poster}>
      <Slogan>
        <Flex>
          <Text letterSpacing={'0.25em'}>SEARCH</Text>
        </Flex>

        <Flex>
          <Text fontSize={'1.5em'}>ANY</Text>
          <Box fontSize={'0.45em'} py={'0.3em'} px={'1em'} lineHeight={1}>
            <Text>game</Text>
            <Text>genre</Text>
            <Text>platform</Text>
          </Box>
        </Flex>
      </Slogan>
    </Introduce>
  );
};
