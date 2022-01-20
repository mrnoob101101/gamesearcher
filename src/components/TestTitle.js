import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getGames } from '../store/main/mainSlice';
import { Box, Flex } from '@chakra-ui/react';

export const TestTitle = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGames());
  }, []);
  const results = useSelector((state) => state.games.gamesData?.results);
  const games = useSelector((state) => state.games);
  console.log(games);
  if (games.status === 'success') {
    return (
      <Flex
        justifyContent={'space-around'}
        flexWrap={'wrap'}
        backgroundColor={'black'}
      >
        {results.map((item) => {
          return (
            <Box
              key={item.name}
              m={'1vw'}
              backgroundColor={'gray'}
              borderRadius={'10px'}
              overflow={'hidden'}
            >
              <div>
                <img alt="Poster" width="400px" src={item.background_image} />
              </div>
              <Box textAlign={'center'} py={'1vw'}>
                {item.name}
              </Box>
            </Box>
          );
        })}
      </Flex>
    );
  } else return null;
};
