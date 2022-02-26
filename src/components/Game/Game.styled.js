import styled from '@emotion/styled';

export const GameInfo = styled.div`
  background: ${(props) => `url(${props.background}) no-repeat center`};
  background-size: cover;
  height: 100vh;
  font-family: 'Manrope', sans-serif;
  color: white;
  @media (max-width: 600px) {
    height: 80vh;
  }
`;

export const MainText = styled.p`
  padding: 1vw 1vw 1vw 3vw;
  font-size: 3em;
  background-color: #00728c99;
  vertical-align: center;
  @media (max-width: 600px) {
    font-size: 1.5em;
  }
`;

export const DescriptionText = styled.p`
  color: white;
  background-color: #00728c99;
  margin: 45vh 0 0 0;
  padding: 10px 4vw 10px 4vw;
  font-size: calc(8px + 0.5vw);
  /*clear: left;*/
  overflow-y: scroll;
  max-height: 15vh;
  cursor: ns-resize;
  @media (max-width: 600px) {
    margin-top: 41.5vh;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 1);
  }
`;
export const GameDetails = styled.div`
  background: var(--background);
  color: white;
  padding: 0 1vw 0 1vw;
`;

export const Genre = styled.span`
  background-color: #282c34;
  margin-left: 20px;
  padding: 5px;
  border-radius: 8px;
`;

export const Developer = styled.span`
  background-color: #89dad1;
  margin-right: 5px;
  padding: 3px;
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
  padding: 15px 2vw;
`;
