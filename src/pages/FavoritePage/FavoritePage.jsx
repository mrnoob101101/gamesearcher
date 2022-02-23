import { Header } from '../../components/Header/Header';
import { Favorites } from '../../components/Favorites/Favorites';
import { useSelector } from 'react-redux';
import { Error } from '../../components/Error/Error';
import { selectStatus } from '../../store/main/selectors';

export const FavoritePage = () => {
  const status = useSelector(selectStatus);
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
