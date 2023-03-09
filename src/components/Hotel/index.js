import HotelOptions from '../../components/Hotel/HotelOptions';
import { Subtitle } from '../../style/paymentStyle';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import useToken from '../../hooks/useToken';
import { getHotels } from '../../services/hotelApi';

export default function HotelComponent() {
  const token = useToken();
  const [ hotels, setHotels ] = useState([]);

  useEffect(() => {
    const promiseHotel = getHotels(token);

    promiseHotel.then((res) => {
      console.log(res);
      setHotels(res);
    });

    promiseHotel.catch((err) => {
      console.log(err.response.status);
    });
  }, []);

  return (
    <>
      <Subtitle>Primeiro, escolha seu hotel</Subtitle>
      <DivHotelOptions>
        {hotels.map((hotel) => {
          return(
            <HotelOptions hotel={hotel} key={hotel.id} availableRooms={103} accommodations={'Single e Double'} name={hotel.name} image={hotel.image}/>
          );
        })}
      </DivHotelOptions>
    </>
  );
}

const DivHotelOptions = styled.div`
  display: flex;
`;
