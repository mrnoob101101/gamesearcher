import styled from '@emotion/styled';

export const GameInfo = styled.div`
  background: ${(props) => `url(${props.background}) no-repeat center`};
  background-size: cover;
  height: 100vh;
  font-family: 'Manrope', sans-serif;
`;

export const DescriptionText = styled.h3`
  color: white;
  background-color: #00728c99;
  margin: 45vh 0 0 0;
  padding: 0 4vw 0 4vw;
  font-size: calc(8px + 0.5vw);
  /*clear: left;*/
`;

export const Genre = styled.span`
  background-color: #282c34;
  margin-left: 15px;
  padding: 5px;
  border-radius: 8px;
`;

export const Website = styled.a`
  display: block;
  padding-top: 15px;
  padding-left: 20px;
`;

export const Metascore = styled.p`
  float: right;
  font-size: calc(10px + 1vw);
  padding-top: 20px;
`;
