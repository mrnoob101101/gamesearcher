import {
  Box,
  Button,
  Checkbox,
  Collapse,
  useDisclosure
} from '@chakra-ui/react';

import { useDispatch, useSelector } from 'react-redux';
import { getGamesWithFilter } from '../../store/main/mainSlice';
import { NintendoSwitch, StrategyGenre } from './Filter.styled';

export const Filter = () => {
  const { isOpen, onToggle } = useDisclosure();
  const dispatch = useDispatch();

  let isStrategyGenreChecked = useSelector(
    (state) => state.games?.isStrategyGenreChecked
  );
  const isNintendoSwitchChecked = useSelector(
    (state) => state.games.isNintendoSwitchChecked
  );
  const state = useSelector((state) => state);
  console.log('STATE FROM FILTER', state);


  /*const [isActionGenreChecked, setActionGenreChecked] = useState(false);*/

  /*const handleChangeActionFilter = () => {
    setActionGenreChecked(actionGenre => !actionGenre);
    console.log('ВНУТРЕННИЙ', isActionGenreChecked);
    dispatch(getGamesWithFilter(isActionGenreChecked));
  };*/

  /*const getGamesWithFilter = createAction('games/filter', (isActionGenreChecked) => {
    return {
      payload: {
        isActionGenreChecked: isActionGenreChecked ? 'action' : ''
      }
    };
  });*/
  console.log('Внешний', isStrategyGenreChecked);
  const handleChangeStrategyGamesFilter = () => {
    dispatch(getGamesWithFilter(!isStrategyGenreChecked));
  };
  return (
    <>
      <Box>
        <StrategyGenre
          onClick={() => handleChangeStrategyGamesFilter()}
          isStrategyGenreChecked={isStrategyGenreChecked}
        >
          Strategy
        </StrategyGenre>
        <NintendoSwitch
          onClick={() => handleChangeStrategyGamesFilter()}
          isStrategyGenreChecked={isNintendoSwitchChecked}
        >
          Nintendo Switch
        </NintendoSwitch>
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
                  isActionGenreChecked: isStrategyGenreChecked
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
