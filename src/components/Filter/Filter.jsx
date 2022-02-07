import {
  Box,
  Button,
  Radio,
  RadioGroup,
  Stack
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { getGames, getGamesWithFilter } from '../../store/main/mainSlice';
import { useState } from 'react';
import { listOfGenres } from './utils/listOfGenres';
import { listOfPlatforms } from './utils/listOfPlatforms';

export const Filter = () => {

  const dispatch = useDispatch();

  const state = useSelector((state) => state);
  console.log('STATE FROM FILTER', state);
  const selectedGenre = useSelector((state) => state.games.selectedGenre);
  const selectedPlatform = useSelector((state) => state.games.selectedPlatform);
  const page = useSelector(state => state.games.currentPage);

  const [genreRadioButtonPosition, setGenreRadioButtonPosition] = useState('');
  const [platformRadioButtonPosition, setPlatformRadioButtonPosition] = useState('');

  const handleClearFilters = () => {
    setPlatformRadioButtonPosition('');
    setGenreRadioButtonPosition('');
    dispatch(getGames(page));
  };

  console.log('selectedGenre', selectedGenre);
  return (
    <>
      <Box>
        <RadioGroup onChange={setGenreRadioButtonPosition} value={genreRadioButtonPosition}>
          <Stack direction="row">
            {listOfGenres.map((genre) => {
              return (
                <div key={genre.id}>
                  <Radio
                    value={genre.name}
                    onClick={() =>
                      dispatch(getGamesWithFilter(genre.id, selectedPlatform))
                    }
                  >
                    {genre.name}
                  </Radio>
                </div>
              );
            })}
            {/*<Radio
              platform="all"
              onClick={() =>
                dispatch(getGames(page))
              }
            >
              All
            </Radio>*/}
          </Stack>
        </RadioGroup>

        <RadioGroup onChange={setPlatformRadioButtonPosition} value={platformRadioButtonPosition}>
          <Stack direction="row">

            {listOfPlatforms.map((platform) => {
              return (
                <div key={platform.id}>
                  <Radio
                    value={platform.name}
                    onClick={() =>
                      dispatch(getGamesWithFilter(selectedGenre, platform.id))
                    }
                  >
                    {platform.name}
                  </Radio>
                </div>
              );
            })}
            <Button onClick={() => handleClearFilters()}>Clear filters</Button>
          </Stack>
        </RadioGroup>
      </Box>

    </>
  );
};
