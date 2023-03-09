import styled from 'styled-components';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/Auth';
import axios from 'axios';
import { getHotelsWithRooms } from '../../services/hotelApi';
import useToken from '../../hooks/useToken';

export default function HotelOptions(props) {
  const token = useToken();
  const { hotel, setHotel } = useContext(AuthContext);
  function handleClick() {
    setHotel(props.hotel);
    const hotelWRoom = getHotelsWithRooms(token, props.hotel.id)
      .then((res) => { console.log(res); })
      .catch((res) => { console.log(res); });
  }
  return (
    <>
      <Box onClick={() => handleClick(props.hotel)} clicked={ props.hotel.id === hotel.id }>
        <Image src={props.image} />
        <DivDesc>
          <Name>{props.name}</Name>
          <Desc>Tipos de acomodação:</Desc>
          <DescValue>{props.accommodations}</DescValue>
          <Desc>Vagas disponíveis</Desc>
          <DescValue>{props.availableRooms}</DescValue>
        </DivDesc>
      </Box>
    </>
  );
}

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

const Image = styled.img`
    width: 168px;
    height: 109px;
    border-radius: 5px;
    margin-top: 16px;
`;

const Name = styled.h2`
    font-size: 20px;
    font-weight: 400;
    color: #343434;
`;

const Desc = styled.h3`
    margin-top: 10px;
    font-weight: 700;
    font-size: 12px;
`;

const DescValue = styled.h3`
    margin-top: 3px;
    font-weight: 400;
    font-size: 12px;
    color: #3c3c3c;
`;

const DivDesc = styled.div`
    width: 100%;
    height: auto;
    padding: 10px 0px 0px 14px;
`;
