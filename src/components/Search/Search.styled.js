import styled from '@emotion/styled';

export const SearchBox = styled.div`
  transform: translate(-100%);
  position: absolute;
  top: 7px;
  right: 5%;

  :hover input {
    width: 30vw;
    background: #272133;
    border-radius: 10px;
    position: absolute;
    top: 1%;
    right: 20%;
  }

  @media (max-width: 600px) {
    right: 8%;
    :hover input {
      width: 65vw;
    }
  }
`;

export const Input = styled.input`
  padding: 10px;
  width: 60px;
  height: 60px;
  background: none;
  border: 4px solid #ffd52d;
  border-radius: 50px;
  box-sizing: border-box;
  font-family: Magneto sans-serif;
  font-size: 26px;
  color: var(--font-color);
  outline: none;
  transition: 0.5s;
  position: absolute;
  top: 1%;
  right: 20%;
  @media (max-width: 600px) {
    width: 35px;
    height: 35px;
  }
`;

export const Icon = styled.div`
  transform: translate(-50%, -50%);
  font-size: 26px;
  color: #ffd52d;
  transition: 0.2s;
  margin-top: 30px;
  @media (max-width: 600px) {
    font-size: 15px;
    margin-top: 17px;
    margin-right: 5px;
  }
`;
