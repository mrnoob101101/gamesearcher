import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useSelector } from 'react-redux';
import { Img } from './CarouselOfScreenshots.styled';
import { Box } from '@chakra-ui/react';
import { selectScreenshots } from '../../../store/main/selectors';

export const CarouselOfScreenshots = () => {
  const screenshots = useSelector(selectScreenshots);
  //убираем среди скриношотов постер, который идёт в нулевом элементе
  const filteredScreenshots = screenshots.filter((item, index) => index !== 0);
  SwiperCore.use([Navigation, Pagination]); //конфиг для свайпера скриншотов
  let slidesPerView = 2;
  if (window.screen.width < 600) {
    slidesPerView = 1;
  }
  return (
    <>
      <Box background={'var(--background)'}>
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
