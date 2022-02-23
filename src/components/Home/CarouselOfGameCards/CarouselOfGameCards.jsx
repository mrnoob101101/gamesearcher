import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { listOfTopGames } from '../helpers/listOfTopGames';
import { GameCard } from '../../GameCard/GameCard';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Example, SliderBox } from './CarouselOfGameCards.styled';

export const CarouselOfGameCards = () => {
  SwiperCore.use([Navigation, Pagination]); //конфиг для свайпера

  let slidesPerView = 3;

  if (window.screen.width < 600) {
    slidesPerView = 1;
  }
  return (
    <>
      <Example>
        <p>For example - top indie games on Nintendo Switch:</p>
      </Example>
      <SliderBox>
        <Swiper
          navigation
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={slidesPerView}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {listOfTopGames.map((game) => {
            return (
              <SwiperSlide key={game.id}>
                <GameCard
                  key={game.id}
                  image={game.background_image}
                  name={game.name}
                  id={game.id}
                  screenshots={game.short_screenshots}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </SliderBox>
    </>
  );
};
