import styled from '@emotion/styled';

export const Box = styled('div')`
  :hover {
    transform: scale(1.2);
    transition: 0.4s;
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
    transform: scale(1.1);
    transition: 0.2s;
  }
`;
