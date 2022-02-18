import { Box, Button, Flex, Select } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { getGames, getGamesWithFilter } from '../../store/main/mainSlice';
import { useEffect, useState } from 'react';
import { listOfGenres } from './utils/listOfGenres';
import { listOfPlatforms } from './utils/listOfPlatforms';
import { Option } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const state = useSelector((state) => state);
  console.log('STATE FROM FILTER', state);
  const selectedGenre = useSelector((state) => state.games.selectedGenre);
  const selectedPlatform = useSelector((state) => state.games.selectedPlatform);
  const page = useSelector((state) => state.games.currentPage);

  const [genreDropDownMenuPosition, setGenreDropDownMenuPosition] = useState('');
  const [platformDropDownMenuPosition, setPlatformDropDownMenuPosition] =
    useState('');

  const handleClearFilters = () => {
    setPlatformDropDownMenuPosition('');
    setGenreDropDownMenuPosition('');
    dispatch(getGames(page));
  };

  useEffect(() => {
    setGenreDropDownMenuPosition(selectedGenre);
    setPlatformDropDownMenuPosition(selectedPlatform);
    if (selectedGenre === '' && selectedPlatform === '') {
      dispatch(getGames(page));
    }
  });

  const handleChangeSelectedGenre = (e) => {
    setGenreDropDownMenuPosition(e.target.value);
    dispatch(getGamesWithFilter(e.target.value, selectedPlatform));
    console.log('targetGenre', e.target.value);
  };

  const handleChangeSelectedPlatform = (e) => {
    setPlatformDropDownMenuPosition(e.target.value);
    dispatch(getGamesWithFilter(selectedGenre, e.target.value));
    console.log('targetPlatform', e.target.value);
  };

  console.log('genreRadioButtonPosition', genreDropDownMenuPosition);

  return (
    <>
      <Box bg={'black'} color={'white'}>
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
        <Flex>
          <Select
            placeholder="Select genre"
            colorScheme={'teal'}
            onChange={handleChangeSelectedGenre}
            value={genreDropDownMenuPosition}
            color={'black'}
            bg={'tomato'}
            maxWidth={'30%'}
            m={'1em 4em 1em 2em'}
          >
            {listOfGenres.map((genre) => {
              return (
                <Option key={genre.id} value={genre.id}>
                  {genre.name}
                </Option>
              );
            })}
          </Select>

          <Select
            placeholder="Select platform"
            onChange={handleChangeSelectedPlatform}
            value={platformDropDownMenuPosition}
            color={'black'}
            bg={'tomato'}
            maxWidth={'30%'}
            m={'1em 4em 1em 2em'}
            /*mx={'4vw'}*/
          >
            {listOfPlatforms.map((platform) => {
              return (
                <option style={{ backgroundColor: 'green' }} key={platform.id} value={platform.id}>
                  {platform.name}
                </option>
              );
            })}
          </Select>
          <Button colorScheme={'red'} size={'md'} onClick={() => handleClearFilters()}>Clear filters</Button>
        </Flex>
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

      </Box>
    </>
  );
};
