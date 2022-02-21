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
