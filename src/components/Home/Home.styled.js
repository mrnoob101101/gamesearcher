import styled from '@emotion/styled';

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
  background: black;
`;

export const TextWrap = styled.div`
  font-size: 0.45em;
  padding: 0.3em 0.8em 0.3em 0.8em;
  line-height: 1;
`;
