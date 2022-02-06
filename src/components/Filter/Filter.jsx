import {
  Box,
  Button,
  Checkbox,
  Collapse,
  Radio,
  RadioGroup,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';

import { useDispatch, useSelector } from 'react-redux';
import { getGamesWithFilter } from '../../store/main/mainSlice';
import { IndieGenre, NintendoSwitch, StrategyGenre } from './Filter.styled';
import { useState } from 'react';
import { listOfGenres } from './utils/listOfGenres';
import { listOfPlatforms } from './utils/listOfPlatforms';

export const Filter = () => {
  const { isOpen, onToggle } = useDisclosure();
  const dispatch = useDispatch();

  const state = useSelector((state) => state);
  console.log('STATE FROM FILTER', state);
  const selectedGenre = useSelector((state) => state.games.selectedGenre);
  const selectedPlatform = useSelector((state) => state.games.selectedPlatform);

  /*const [value, setValue] = useState('');*/

  console.log('selectedGenre', selectedGenre);
  return (
    <>
      <Box>
        <RadioGroup>
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
            <Radio
              value="all"
              onClick={() =>
                dispatch(getGamesWithFilter('none', selectedPlatform))
              }
            >
              All
            </Radio>
          </Stack>
        </RadioGroup>

        <RadioGroup>
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
            <Radio
              value="all"
              onClick={() =>
                dispatch(getGamesWithFilter(selectedGenre, 'none'))
              }
            >
              All
            </Radio>
          </Stack>
        </RadioGroup>
      </Box>
      <Button onClick={onToggle}>Click Me</Button>
      <Collapse in={isOpen} animateOpacity>
        <Box
          p="40px"
          color="white"
          mt="4"
          bg="teal.500"
          rounded="md"
          shadow="md"
        >
          <Checkbox
            colorScheme={'red'}
            px={5}
            onChange={() => {
              dispatch(
                getGamesWithFilter({
                  isActionGenreChecked: isStrategyGenreChecked,
                })
              );
            }}
          >
            Action
          </Checkbox>

          <Checkbox colorScheme={'red'}>Strategy</Checkbox>
        </Box>
      </Collapse>
    </>
  );
};
