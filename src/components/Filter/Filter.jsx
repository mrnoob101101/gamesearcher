import { Button, Flex, Select, Text } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { getGamesWithFilter } from '../../store/main/mainSlice';
import { useEffect } from 'react';
import { listOfGenres } from './helpers/listOfGenres';
import { listOfPlatforms } from './helpers/listOfPlatforms';
import {
  selectChosenGenre,
  selectChosenPlatform
} from '../../store/main/selectors';

export const Filter = ({
  setGenreDropDownMenuPosition,
  setPlatformDropDownMenuPosition,
  handleClearFilters,
  genreDropDownMenuPosition,
  platformDropDownMenuPosition
}) => {
  const dispatch = useDispatch();
  const selectedGenre = useSelector(selectChosenGenre);
  const selectedPlatform = useSelector(selectChosenPlatform);

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
      <Flex bg={'var(--background)'} color={'var(--font-color)'}>
        <Text p={'0.7em 0 0 5%'}>Select genre</Text>
        <Select
          onChange={handleChangeSelectedGenre}
          value={genreDropDownMenuPosition}
          bg={'tomato'}
          maxWidth={'30%'}
          m={'1em 2vw 1em 1vw'}
        >
          {listOfGenres.map((genre) => {
            return (
              <option
                style={{ color: 'var(--font-color)', background: '#bd5c4b' }}
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
                style={{ color: 'var(--font-color)', background: '#bd5c4b' }}
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
    </>
  );
};
