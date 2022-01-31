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
  return (
    <>
      <Box background={'#3b3a3f'}>
        <Swiper
          navigation
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={2}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
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
