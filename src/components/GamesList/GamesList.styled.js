import styled from '@emotion/styled';

export const Poster = styled('div')`
  background: ${(props) => `url(${props.background}) no-repeat center`};
  background-size: cover;
  height: 25em;
  width: 25em;
  border: solid 2px white;
`;
