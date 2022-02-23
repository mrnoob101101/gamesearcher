import { Box, Button, Flex, Select, Text } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { getGamesWithFilter } from '../../store/main/mainSlice';
import { useEffect } from 'react';
import { listOfGenres } from './utils/listOfGenres';
import { listOfPlatforms } from './utils/listOfPlatforms';

export const Filter = ({
  setGenreDropDownMenuPosition,
  setPlatformDropDownMenuPosition,
  handleClearFilters,
  genreDropDownMenuPosition,
  platformDropDownMenuPosition,
}) => {
  const dispatch = useDispatch();

  const state = useSelector((state) => state);
  console.log('STATE FROM FILTER', state);
  const selectedGenre = useSelector((state) => state.games.selectedGenre);
  const selectedPlatform = useSelector((state) => state.games.selectedPlatform);

  useEffect(() => {
    setGenreDropDownMenuPosition(selectedGenre);
    setPlatformDropDownMenuPosition(selectedPlatform);
  });

  const handleChangeSelectedGenre = (e) => {
    setGenreDropDownMenuPosition(e.target.value);
    dispatch(getGamesWithFilter(e.target.value, selectedPlatform));
  };

  const handleChangeSelectedPlatform = (e) => {
    setPlatformDropDownMenuPosition(e.target.value);
    dispatch(getGamesWithFilter(selectedGenre, e.target.value));
  };

  return (
    <>
      <Box bg={'black'} color={'white'}>
        <Flex>
          <Text p={'0.7em 0 0 5%'}>Select genre</Text>
          <Select
            colorScheme={'teal'}
            onChange={handleChangeSelectedGenre}
            value={genreDropDownMenuPosition}
            bg={'tomato'}
            maxWidth={'30%'}
            m={'1em 2vw 1em 1vw'}
          >
            {listOfGenres.map((genre) => {
              return (
                <option
                  style={{ color: 'white', background: '#bd5c4b' }}
                  key={genre.id}
                  value={genre.id}
                >
                  {genre.name}
                </option>
              );
            })}
          </Select>
          <Text p={'0.7em 0 0 5%'}>Select platform</Text>
          <Select
            onChange={handleChangeSelectedPlatform}
            value={platformDropDownMenuPosition}
            bg={'tomato'}
            maxWidth={'30%'}
            m={'1em 2vw 1em 1vw'}
          >
            {listOfPlatforms.map((platform) => {
              return (
                <option
                  style={{ color: 'white', background: '#bd5c4b' }}
                  key={platform.id}
                  value={platform.id}
                >
                  {platform.name}
                </option>
              );
            })}
          </Select>
          <Button
            minW={'90px'}
            m={'1em 5vw 1em 5vw'}
            bg={'tomato'}
            size={'md'}
            onClick={handleClearFilters}
          >
            Clear filters
          </Button>
        </Flex>
      </Box>
    </>
  );
};
