import { useDispatch } from 'react-redux';
import { getGames } from '../store/main/mainSlice';

export const Test2 = () => {
  const dispatch = useDispatch();

  return <div onClick={() => dispatch(getGames())}>TEST2</div>;
};
