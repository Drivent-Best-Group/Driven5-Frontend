import HotelOptions from '../../components/Hotel/HotelOptions';
import { Subtitle } from '../../style/paymentStyle';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import useToken from '../../hooks/useToken';
import { BookRoom, getHotels, GetResume, getRoomBookings, updateRoom } from '../../services/hotelApi';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/Auth';
import IconComponent from './Icon';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function HotelComponent() {
  const token = useToken();
  const [hotels, setHotels] = useState([]);
  const [bookingId, setBookingId] = useState([]);
  const { showRooms, hotelWRoom, showBtn, roomClicked, change, setChange } =
    useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(async() => {
    try {
      const promise = await GetResume(token);
      setBookingId(promise.id);
      if (!change) {
        navigate('/dashboard/resume');
      }
    } catch (err) {
      console.log('erro', err.response.data);
    }
  }, []);

  async function newReservation(token, roomId) {
    try {
      await updateRoom(token, roomId, bookingId);
      setChange(false);
      navigate('/dashboard/resume');
      toast('Reserva trocada com sucesso');
    } catch (err) {
      console.log(err);
      toast('Algo deu errado na sua troca');
    }
  }

  function reserveRoom(token, roomId) {
    BookRoom(token, roomId)
      .then((res) => {
        console.log('res index', res);
        navigate('/dashboard/resume');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    const promiseHotel = getHotels(token);

    promiseHotel.then((res) => {
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
          return (
            <HotelOptions
              hotel={hotel}
              key={hotel.id}
              availableRooms={103}
              accommodations={'Single e Double'}
              name={hotel.name}
              image={hotel.image}
            />
          );
        })}
      </DivHotelOptions>
      {hotelWRoom.length == 0 ? (
        ''
      ) : showRooms ? (
        <>
          <RoomsDiv>
            {hotelWRoom.map((room) => {
              return <IconComponent room={room} key={room.id} />;
            })}
          </RoomsDiv>

          {!showBtn ? (
            ''
          ) : change ? (
            <ReserveBtn
              onClick={() => {
                newReservation(token, roomClicked.id);
              }}
            >
              TROCAR QUARTO
            </ReserveBtn>
          ) : (
            <ReserveBtn
              onClick={() => {
                reserveRoom(token, roomClicked.id);
              }}
            >
              RESERVAR QUARTO
            </ReserveBtn>
          )}
        </>
      ) : (
        ''
      )}
    </>
  );
}

const ReserveBtn = styled.button`
  width: 182px;
  height: 37px;

  margin-top: 46px;

  background: #e0e0e0;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  cursor: pointer;

  :hover {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
  }
`;

const RoomsDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
`;

const DivHotelOptions = styled.div`
  display: flex;
`;
