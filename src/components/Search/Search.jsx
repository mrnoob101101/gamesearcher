/*import { ReactComponent as SearchIcon } from "../../assets/searchIcon.svg";*/
import { useState } from 'react';
import { useDispatch } from 'react-redux';


export const Search = () => {

  const dispatch = useDispatch();
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

  /*  <div className="box">
      <form name="search">
        <input type="text" className="input" name="txt"
               onMouseOut="document.search.txt.value = ''">
      </form>
      <i className="fas fa-search"></i>
    </div>*/

  return (
    <SearchBox>

    </SearchBox>
  );

};


/*
<InputGroup>
  <Input
    placeholder={'Search your game'}
    onChange={handleChangeValue}
    onKeyDown={handleSubmit}
  />
  <InputRightElement width="1rem">
    <IconButton
      colorScheme="blue"
      aria-label="Search database"
      icon={<SearchIcon />}
      onClick={() => submitByButton()}
    />
  </InputRightElement>
</InputGroup>*/
