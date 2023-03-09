import HotelOptions from '../../components/Hotel/HotelOptions';
import { Subtitle } from '../../style/paymentStyle';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import useToken from '../../hooks/useToken';
import { getHotels } from '../../services/hotelApi';
import NoHotel from './noHotel';
import Teste from './teste';

export default function HotelComponent() {
  const token = useToken();
  const [ hotels, setHotels ] = useState([]);
  const [ hasTicket, setHasTicket] = useState(null);

  useEffect(() => {
    const promiseHotel = getHotels(token);

    promiseHotel.then((res) => {
      console.log(res);
      setHotels(res);
      setHasTicket(true);
    });

    promiseHotel.catch((err) => {
      console.log(err);
      setHasTicket(false);
    });
  }, []);

  return (
    <>
      {!hasTicket ? <Teste/> : <>
        <Subtitle>Primeiro, escolha seu hotel</Subtitle>
        <DivHotelOptions>
          {hotels.map((hotel) => {
            return(
              <HotelOptions hotel={hotel} key={hotel.id} availableRooms={103} accommodations={'Single e Double'} name={hotel.name} image={hotel.image}/>
            );
          })}
        </DivHotelOptions>
      </>}
    </>
  );
}

const DivHotelOptions = styled.div`
  display: flex;
`;
