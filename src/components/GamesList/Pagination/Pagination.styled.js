import styled from '@emotion/styled';

export const PaginationBackPage = styled('div')`
  display: ${(props) => (props.pagePropsForStyled <= 0 ? 'none' : 'block')};

  background-color: #0c8880;
  color: white;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  margin: 8px;
  cursor: pointer;
  text-align: center;
  padding: 2px 1px 0 0;
  border: solid 1px;

  :hover {
    transform: scale(1.2);
    transition: 0.2s;
  }
`;

export const PaginationForwardPage = styled('div')`
  display: ${(props) => (props.nextPageURL === null ? 'none' : 'block')};
  background-color: #0c8880;
  color: white;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  margin: 8px;
  cursor: pointer;
  text-align: center;
  padding: 2px 1px 0 0;
  border: solid 1px;

  :hover {
    transform: scale(1.2);
    transition: 0.2s;
  }
`;

export const PaginationCurrentPage = styled('div')`
  background-color: #385451;
  color: white;
  border-radius: 50%;
  border: solid 1px;
  width: 30px;
  height: 30px;
  margin: 8px;
  text-align: center;
  padding: 2px 1px 0 0;
`;
