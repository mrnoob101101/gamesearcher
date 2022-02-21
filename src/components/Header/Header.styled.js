import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const HeaderStyled = styled.div`
  display: flex;
  /* justify-content: space-around;*/
  font-size: 3vh;
  color: white;
  background-color: black;
  height: 5vh;
  padding: 0 5% 3em 5%;
  font-family: 'Manrope', sans-serif;
  letter-spacing: 0.2em;
`;

export const HeaderInner = styled.div`
  display: flex;
  padding-top: 0.5vh;
  height: 5vh;
  padding-left: 60%;
  @media (max-width: 650px) {
    padding-left: 5%;
    font-size: 0.7em;
    letter-spacing: 0.1em;
  }
`;

export const Logo = styled(Link)`
  display: flex;
  fill: #eff5f9;
  width: 2em;
  height: 2em;
`;

export const Icon = styled(Link)`
  display: flex;
  fill: #eff5f9;
  width: 1.5em;
  height: 1.5em;

  margin: 0.3em 0 0 1.5em;
`;

export const HeaderQueries = styled.div`
  display: flex;
  padding: 0.3em 0.7em 0 0.7em;
`;
