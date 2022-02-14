import { Box, Button, Radio, RadioGroup, SimpleGrid } from '@chakra-ui/react';
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
    setPlatformRadioButtonPosition(selectedPlatform);
    setGenreRadioButtonPosition(selectedGenre);
  });

  console.log('genreRadioButtonPosition', genreRadioButtonPosition);

  return (
    <>
      <Box bg={'black'} color={'white'}
        flexWrap={'wrap'}>

        <RadioGroup
          onChange={setGenreRadioButtonPosition}
          value={genreRadioButtonPosition}

          /*display={'flex'}
          justifyContent={'space-around'}*/
        >
          {/*<Stack direction="row">*/}
          {listOfGenres.map((genre) => {
            return (
              <SimpleGrid columns={2} spacing={10} key={genre.id}>
                <Radio
                  colorScheme={'red'}
                  value={genre.id}
                  onClick={() =>
                    dispatch(getGamesWithFilter(genre.id, selectedPlatform))
                  }
                >
                  {genre.name}
                </Radio>
              </SimpleGrid>
            );
          })}
          {/*</Stack>*/}
        </RadioGroup>


        <Box>
          <RadioGroup
            onChange={setPlatformRadioButtonPosition}
            value={platformRadioButtonPosition}
          >
            {/*<Stack direction="row">*/}
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
            <Button onClick={() => handleClearFilters()}>Clear filters</Button>
            {/*</Stack>*/}
          </RadioGroup>
        </Box>
      </Box>
    </>
  );
};
