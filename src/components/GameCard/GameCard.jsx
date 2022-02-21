import { CardLink, Name } from './GameCard.styles';
import { useDispatch } from 'react-redux';
import { getGameDetails, setGameScreenshots } from '../../store/main/mainSlice';

export const GameCard = ({ image, name, id, screenshots }) => {
  const dispatch = useDispatch();

  const handleClickOnCard = () => {
    dispatch(getGameDetails({ gameID: id }));
    dispatch(
      setGameScreenshots(screenshots)
    ); /*Сохраняем в стор скриншоты выбраной игры чтобы не делать лишний запрос в апи (в ответе апи по выбраной игре скриншотов нет)*/
  };

  return (
    <CardLink to={`/game/${id}`} onClick={handleClickOnCard} background={image}>
      <Name>{name}</Name>
    </CardLink>
  );
};
