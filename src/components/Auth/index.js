import styled from 'styled-components';

import Container from '../Container';

export const StyledContainer = styled(Container)`
  font-size: 16px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
`;

export const Title = styled.h1`
  font-size: 32px;
  margin-top: 10px;
`;

export const Label = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

export const Box = styled.div`
  width: 196px;
  height: 264px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  margin-right: 20px;
  margin-bottom: 40px;

  border-radius: 10px;
  border: ${(props) => (props.clicked ? 'none' : '1px solid #cecece' )};
  background-color: ${(props) => (props.clicked ? '#FFEED2' : '#EBEBEB')};
  font-size: 16px;
  font-weight: 400;

  :hover {
    cursor: pointer;
  }

`;
export const HotelBox = styled(Box)`
background-color: #FFEED2;
:hover{
  cursor: inherit;
}
`;

export const Image = styled.img`
    width: 168px;
    height: 109px;
    border-radius: 5px;
    margin-top: 16px;
`;

export const Name = styled.h2`
    font-size: 20px;
    font-weight: 400;
    color: #343434;
`;

export const Desc = styled.h3`
    margin-top: 10px;
    font-weight: 700;
    font-size: 12px;
`;

export const DescValue = styled.h3`
    margin-top: 3px;
    font-weight: 400;
    font-size: 12px;
    color: #3c3c3c;
`;

export const DivDesc = styled.div`
    width: 100%;
    height: auto;
    padding: 10px 0px 0px 14px;
`;

export const ReserveBtn = styled.button`
width: 182px;
height: 37px;

margin-top: 46px;

background: #E0E0E0;
box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
border-radius: 4px;

cursor: pointer;

:hover{
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.50);
}
`;
