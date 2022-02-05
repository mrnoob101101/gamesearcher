import styled from '@emotion/styled';

export const StrategyGenre = styled.button`
  background-color: ${(props) =>
    props.isStrategyGenreChecked ? 'green' : 'blue'};
`;

export const NintendoSwitch = styled.button`
  background-color: ${(props) =>
    props.isNintendoSwitchChecked ? 'green' : 'blue'};
`;
