import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

/*export const Poster = styled('div')`
  background: ${(props) => `url(${props.background}) no-repeat center`};
  background-size: cover;
  height: 50vh;
  width: 25em;
  margin-top: 1vw;
  /!*border: solid 1px white;*!/
  transition: 1s all;

  :hover {
    transform: scale(0.97);
    transition: 0.3s;
    rotateY(15deg);
  }
`;*/

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
`;
