import styled from '@emotion/styled';

export const SliderBox = styled.div`
  background: var(--background);
`;

export const Example = styled.div`
  display: flex;
  justify-content: center;
  background: var(--background);
  color: var(--font-color);
  font-size: 2em;
  padding-top: 0.5em;
  @media (max-width: 600px) {
    font-size: 1em;
  }
`;
