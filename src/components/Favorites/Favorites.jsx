import { Wrap, FavoritesStyled } from './Favorites.styled';
import { useSelector } from 'react-redux';
import { GameCard } from '../GameCard/GameCard';
import { Heading } from '@chakra-ui/react';

export const Favorites = () => {
  const favoriteList = useSelector((state) => state.favorite.favoriteGames);

  if (favoriteList.length === 0) {
    return (
      <Wrap>
        <Heading color={'var(--font-color)'}> No favorite games yet </Heading>
      </Wrap>
    );
  }
  return (
    <FavoritesStyled>
      {favoriteList.map((game) => {
        return (
          <GameCard
            key={game.id}
            image={game.background_image}
            name={game.name}
            id={game.id}
            screenshots={game.short_screenshots}
          />
        );
      })}
    </FavoritesStyled>
  );
};
