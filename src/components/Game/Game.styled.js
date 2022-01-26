import styled from '@emotion/styled';

export const GameInfo = styled.div`
  background: ${(props) => `url(${props.background}) no-repeat center`};
  background-size: cover;
  height: 100vh;
  opacity: 1;
`;

export const Overview = styled.div`
  display: flex;
  /*position: absolute;*/
  flex-direction: column;
  justify-content: flex-end;
`;

export const DescriptionText = styled.h3`
  /*opacity: unset;*/
  color: white;
  background-color: #00728c99;
  /* border-radius: 10px;*/
  margin: 45vh 0 0 0;
  padding: 0 4vw 0 4vw;
  font-size: calc(8px + 0.5vw);
  clear: left;
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

export const Metascore = styled.h3`
  float: right;
  font-size: calc(10px + 1vw);
  padding-top: 20px;
`;
