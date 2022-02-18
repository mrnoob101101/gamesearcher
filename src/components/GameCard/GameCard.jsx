import { Box } from '@chakra-ui/react';
import { CardLink } from './GameCard.styles';
import { useDispatch } from 'react-redux';
import { getGamePage, setGameScreenshots } from '../../store/main/mainSlice';

export const GameCard = ({ image, name, id, screenshots }) => {
  const dispatch = useDispatch();

  const handleClickOnCard = () => {
    dispatch(getGamePage({ gameID: id }));
    dispatch(
      setGameScreenshots(screenshots)
    ); /*Сохраняем в стор скриншоты выбраной игры чтобы не делать лишний запрос в апи (в ответе апи по выбраной игре скриншотов нет)*/
  };

  return (
    <CardLink to={`/game/${id}`} onClick={handleClickOnCard} background={image}>
      <Box
        textAlign={'center'}
        color={'white'}
        fontSize={'1.3em'}
        bg={'tomato'}
        opacity={0.8}
        py={'1vw'}
        my={'95%'}
      >
        {name}
      </Box>
    </CardLink>
  );
};
