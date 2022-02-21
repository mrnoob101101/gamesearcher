import { Header } from '../../components/Header/Header';
import { Favorites } from '../../components/Favorites/Favorites';
import { useSelector } from 'react-redux';
import { Error } from '../../components/Error/Error';

export const FavoritePage = () => {
  const status = useSelector((state) => state.games.status);
  if (status === 'error') {
    return (
      <>
        <Header />
        <Error />
      </>
    );
  }
  return (
    <>
      <Header />
      <Favorites />
    </>
  );
};
