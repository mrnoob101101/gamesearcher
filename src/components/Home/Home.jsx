import { SliderBox, Introduce, Slogan, Example } from './Home.styled';
import poster from '../../assets/kratos.jpg';
import { Box, Flex, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { listOfTopGames } from './listOfTopGames';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { GameCard } from '../GameCard/GameCard';

export const Home = () => {
  SwiperCore.use([Navigation, Pagination]); //конфиг для свайпера скриншотов
  let slidesPerView = 3;
  if (window.screen.width < 600) {
    slidesPerView = 1;
  }

  return (
    <>
      <Introduce background={poster}>
        <Slogan>
          <Flex>
            <Link to={'/main'}>
              <Text letterSpacing={'0.25em'}>SEARCH</Text>
            </Link>
          </Flex>

          <Flex>
            <Text fontSize={'1.5em'}>ANY</Text>
            <Box fontSize={'0.45em'} py={'0.3em'} px={'0.8em'} lineHeight={1}>
              <Text>game</Text>
              <Text>genre</Text>
              <Text>platform</Text>
            </Box>
          </Flex>
        </Slogan>
      </Introduce>

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
