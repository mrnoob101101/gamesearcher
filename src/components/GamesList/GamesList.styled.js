import styled from '@emotion/styled';

export const ArrowBoxRight = styled.div`
  width: 50px;
  opacity: 0.7;
  z-index: 2;
  position: fixed;
  top: 50%;
  right: 0;
`;

export const ArrowBoxLeft = styled.div`
  width: 50px;
  opacity: 0.7;
  z-index: 2;
  position: fixed;
  top: 50%;
  left: 10px;
`;

export const ArrowWrapper = styled.div`
  width: 3vw;
  cursor: pointer;
  background: black;
`;

export const Warning = styled.div`
  background: black;
  font-size: 3em;
  min-height: 90vh;
  text-align: center;
`;

/*justifyContent={'space-around'}
flexWrap={'wrap'}
backgroundColor={'black'}
minH={'90vh'}
w={'94vw'}*/
export const CardsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  background-color: black;
  min-height: 90vh;
  width: 94vw;
`;
