import { Box, Button, Checkbox, Collapse, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getGamesWithFilter } from '../../store/main/mainSlice';


export const Filter = () => {
  const { isOpen, onToggle } = useDisclosure();
  const dispatch = useDispatch();
  const [isActionGenreChecked, setActionGenreChecked] = useState(false);
  const handleChangeActionFilter = () => {
    setActionGenreChecked(actionGenre => !actionGenre);
    console.log('ВНУТРЕННИЙ', isActionGenreChecked);
  };
  /*const getGamesWithFilter = createAction('games/filter', (isActionGenreChecked) => {
    return {
      payload: {
        isActionGenreChecked: isActionGenreChecked ? 'action' : ''
      }
    };
  });*/
  console.log('Внешний', isActionGenreChecked);
  return (
    <>
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
          <Checkbox colorScheme={'red'} px={5}
            onChange={() => {
              handleChangeActionFilter();
              /*dispatch(getGamesWithFilter());*/
            }}>Action</Checkbox>

          <Checkbox colorScheme={'red'}>Strategy</Checkbox>

        </Box>
      </Collapse>
    </>
  );
};
