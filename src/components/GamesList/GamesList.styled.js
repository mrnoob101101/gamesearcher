import styled from '@emotion/styled';

export const GameCardWrapper = styled('div')`
  margin: 1vw;
  background-color: #00728c;
  border-radius: 10px;
  overflow: hidden;
  border: solid 1px white;

  :hover {
    transform: scale(0.97);
    transition: 0.3s;
  }
`;

export const Pagination = styled('div')`
  background-color: #eff5f9;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  margin: 8px;
  cursor: pointer;
  text-align: center;
  padding-top: 2px;

  :hover {
    transform: scale(1.2);
    transition: 0.2s;
  }
`;
