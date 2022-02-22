import styled from '@emotion/styled';
import { Swiper } from 'swiper/react';

export const Introduce = styled.div`
  background: ${(props) => `url(${props.background}) no-repeat center`};
  background-size: cover;
  height: 70vh;
  font-family: 'Anton', sans-serif;
  color: white;
  font-size: 5em;
`;

export const Slogan = styled.div`
  line-height: 1.1;
  padding: 15% 5% 20% 70%;
  @media (max-width: 800px) {
    padding: 70% 5% 20% 2%;
  }
`;

export const SwiperWrap = styled(Swiper)`
  width: 80%;
  height: 40vw;

  @media (max-width: 600px) {
    height: 35vh;
  }
`;

export const Example = styled.div`
  display: flex;
  justify-content: center;
  background: black;
  color: white;
  font-size: 2em;
  padding-top: 0.5em;
  @media (max-width: 600px) {
    font-size: 1em;
  }
`;

export const SliderBox = styled.div`
  background: black /*linear-gradient(black, white)*/;
`;
