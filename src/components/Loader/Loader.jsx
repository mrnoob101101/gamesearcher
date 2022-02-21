import { Flex, Spinner } from '@chakra-ui/react';

export const Loader = () => {
  return (
    <Flex h={'100vh'} bg={'black'} justify={'center'}>
      <Spinner
        position={'absolute'}
        top={'50%'}
        thickness="5px"
        speed="1s"
        emptyColor="gray.200"
        color="red.500"
        size="xl"
      />
    </Flex>
  );
};
