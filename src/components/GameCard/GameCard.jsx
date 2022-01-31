import { Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Poster } from './GameCard.styles';
import { useDispatch } from 'react-redux';
import { getGamePage, setGameScreenshots } from '../../store/main/mainSlice';

export const GameCard = ({ image, name, id, screenshots }) => {
  const dispatch = useDispatch();

  return (
    <Link
      to={`/game/${id}`}
      onClick={() => {
        dispatch(getGamePage({ gameID: id }));
        dispatch(
          setGameScreenshots(screenshots)
        ); /*Сохраняем в стор скриншоты выбраной игры чтобы не делать лишний запрос в апи (в ответе апи по выбраной игре скриншотов нет)*/
      }}
    >
      <Poster background={image} />
      <Box textAlign={'center'} py={'1vw'} color={'white'}>
        {name}
      </Box>
    </Link>
  );
};
