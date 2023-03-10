import { useContext } from 'react';
import { AuthContext } from '../../contexts/Auth';
import { getHotelsWithRooms } from '../../services/hotelApi';
import useToken from '../../hooks/useToken';
import { Box, Image, DivDesc, Name, Desc, DescValue } from '../Auth';

export default function HotelOptions(props) {
  const token = useToken();
  const { hotel, setHotel, showRooms, setShowRooms, hotelWRoom, setHotelWRoom,  showBtn, setShowBtn } = useContext(AuthContext);

  function handleClick() {
    setHotel(props.hotel);
    setShowBtn(false);
    setShowRooms(true);
    getHotelsWithRooms(token, props.hotel.id)
      .then((res) => {
        setHotelWRoom(res.Rooms); 
      })
      .catch((res) => { 
        console.log(res); 
      });
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
