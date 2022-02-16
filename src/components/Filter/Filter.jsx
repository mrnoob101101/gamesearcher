import { Box, Button, Select } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { getGames, getGamesWithFilter } from '../../store/main/mainSlice';
import { useEffect, useState } from 'react';
import { listOfGenres } from './utils/listOfGenres';
import { listOfPlatforms } from './utils/listOfPlatforms';

export const Filter = () => {
  const dispatch = useDispatch();

  const state = useSelector((state) => state);
  console.log('STATE FROM FILTER', state);
  const selectedGenre = useSelector((state) => state.games.selectedGenre);
  const selectedPlatform = useSelector((state) => state.games.selectedPlatform);
  const page = useSelector((state) => state.games.currentPage);

  const [genreRadioButtonPosition, setGenreRadioButtonPosition] = useState('');
  const [platformRadioButtonPosition, setPlatformRadioButtonPosition] =
    useState('');

  const handleClearFilters = () => {
    setPlatformRadioButtonPosition('');
    setGenreRadioButtonPosition('');
    dispatch(getGames(page));
  };

  useEffect(() => {
    setGenreRadioButtonPosition(selectedGenre);
    setPlatformRadioButtonPosition(selectedPlatform);
    if (selectedGenre === '' && selectedPlatform === '') {
      dispatch(getGames(page));
    }
  });

  const handleChangeSelectedGenre = (e) => {
    setGenreRadioButtonPosition(e.target.value);
    dispatch(getGamesWithFilter(e.target.value, selectedPlatform));
    console.log('targetGenre', e.target.value);
  };

  const handleChangeSelectedPlatform = (e) => {
    setPlatformRadioButtonPosition(e.target.value);
    dispatch(getGamesWithFilter(selectedGenre, e.target.value));
    console.log('targetPlatform', e.target.value);
  };

  console.log('genreRadioButtonPosition', genreRadioButtonPosition);

  return (
    <>
      <Box bg={'black'} color={'white'}
        flexWrap={'wrap'}>

        {/*<RadioGroup

          value={genreRadioButtonPosition}
        >
          <Stack direction="row">
            {listOfGenres.map((genre) => {
              return (
                <div key={genre.id}>
                  <Radio
                    colorScheme={'red'}
                    value={genre.id}
                    onClick={() =>
                      dispatch(getGamesWithFilter(genre.id, selectedPlatform))
                    }
                  >
                    {genre.name}
                  </Radio>
                </div>
              );
            })}
          </Stack>
        </RadioGroup>*/}

        <Select placeholder="Select genre" colorScheme={'teal'} onChange={handleChangeSelectedGenre}
          value={genreRadioButtonPosition} color={'red'}>
          {listOfGenres.map((genre) => {
            return (
              <option key={genre.id} value={genre.id}>{genre.name}</option>
            );
          })}
        </Select>

        <Select placeholder="Select platform" onChange={handleChangeSelectedPlatform}
          value={platformRadioButtonPosition} color={'red'}>
          {listOfPlatforms.map((platform) => {
            return (
              <option key={platform.id} value={platform.id}>{platform.name}</option>
            );
          })}
        </Select>

        {/*<Box>
          <RadioGroup
            onChange={setPlatformRadioButtonPosition}
            value={platformRadioButtonPosition}
          >

            {listOfPlatforms.map((platform) => {
              return (
                <div key={platform.id}>
                  <Radio
                    colorScheme={'red'}
                    value={platform.id}
                    onClick={() =>
                      dispatch(getGamesWithFilter(selectedGenre, platform.id))
                    }
                  >
                    {platform.name}
                  </Radio>
                </div>
              );
            })}
          </RadioGroup>
        </Box>*/}
        <Button onClick={() => handleClearFilters()}>Clear filters</Button>
      </Box>
    </>
  );
};
