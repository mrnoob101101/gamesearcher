import styled from '@emotion/styled';

export const NintendoSwitch = styled.button`
  background-color: ${(props) =>
    props.isNintendoSwitchChecked ? 'green' : 'blue'};
`;

export const IndieGenre = styled.button`
  margin-left: 25px;
  background-color: ${(props) => (props.isGenreChecked ? 'green' : 'blue')};
`;

export const Option = styled.option`
  background-color: #bd5c4b;
`;
