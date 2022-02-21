import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const CardLink = styled(Link)`
  background: ${(props) => `url(${props.background}) no-repeat center`};
  background-size: cover;
  height: 50vh;
  width: 25em;
  margin: 1vw;

  :hover {
    transform: scale(0.97);
    transition: 0.3s;
  }

  @media (max-width: 600px) {
    height: 25vh;
    width: 10em;
  }
`;

export const Name = styled.div`
  text-align: center;
  color: white;
  font-size: 1.3em;
  background: tomato;
  opacity: 0.8;
  padding: 0 1vw 0 1vw;
  margin-top: 95%;
  @media (max-width: 600px) {
    font-size: 0.8em;
  }
`;
