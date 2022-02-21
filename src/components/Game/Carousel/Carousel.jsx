import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useSelector } from 'react-redux';
import { Img } from './Carousel.styled';
import { Box } from '@chakra-ui/react';

export const Carousel = () => {
  const screenshots = useSelector(
    (state) => state.games?.currentGameScreenshots
  );
  //убираем среди скриношотов постер, который идёт в нулевом элементе
  const filteredScreenshots = screenshots.filter((item, index) => index !== 0);
  SwiperCore.use([Navigation, Pagination]); //конфиг для свайпера скриншотов
  let slidesPerView = 2;
  if (window.screen.width < 600) {
    slidesPerView = 1;
  }
  return (
    <>
      <Box background={'black'}>
        <Swiper
          navigation
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={slidesPerView}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {filteredScreenshots.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <Img src={`${item.image}`} alt={''} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Box>
    </>
  );
};
