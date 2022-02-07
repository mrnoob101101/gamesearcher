import {
  Box,
  Button,
  Collapse,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  useDisclosure
} from '@chakra-ui/react';
import { ReactComponent as SearchIcon } from '../../assets/searchIcon.svg';
import { useState } from 'react';


export const Search = () => {
  const { isOpen, onToggle } = useDisclosure();

  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    if (e.keyCode === 13 && value.trim()) {
      addTodo(value.trim());
      setValue('');
    }
  };

  const handleChangeValue = (e) => setValue(e.target.value);

  const submitByButton = () => {
    if (value.trim()) {
      addTodo(value);
      setValue('');
    }
  };


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
          <InputGroup>
            <Input placeholder={'Search your game'} onChange={handleChangeValue}
              onKeyDown={handleSubmit} />
            <InputRightElement width="1rem">
              <IconButton
                colorScheme="blue"
                aria-label="Search database"
                icon={<SearchIcon />}
                onClick={() => submitByButton()}
              />
            </InputRightElement>
          </InputGroup>
        </Box>
      </Collapse>
    </>
  );
};



