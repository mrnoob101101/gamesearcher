import { Box, Flex } from '@chakra-ui/react';

export const Header = () => {
  return (
    <Flex bg={'tomato'} h={'15vh'} fontSize={'5vh'} py={'3vw'} justify={'space-around'}>
      <Box>
        HOME
      </Box>
      <Box>GAME LIST</Box>
    </Flex>
  );
};
