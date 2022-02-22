/*import { ReactComponent as SearchIcon } from "../../assets/searchIcon.svg";*/

import { Icon, Input, SearchBox } from './Search.styled';
import { getSearchedGames } from '../../store/main/mainSlice';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

export const Search = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    if (e.keyCode === 13 && value) {
      dispatch(getSearchedGames(value.trim()));
      /*if (e.code === 'Enter' && value.*/
      setValue('');
    }
  };
  const handleChangeValue = (e) => setValue(e.target.value);
  const submitByButton = () => {
    if (value) {
      dispatch(getSearchedGames(value.trim()));
      setValue('');
    }
  };

  const history = useHistory();

  const handleClick = () => {
    history.push('/main');
  };

  return (
    <SearchBox onClick={handleClick}>
      <Input
        type="text"
        onKeyDown={handleSubmit}
        onChange={handleChangeValue}
        value={value}
      />
      <Icon onClick={submitByButton} className="fas fa-search" />
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

/*<form>
  <input type="text" onChange={handleChangeValue} onKeyDown={handleSubmit} />
</form>
<button onClick={submitByButton}>Add</button>*/
