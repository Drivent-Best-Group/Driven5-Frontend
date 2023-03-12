import { Box, Image, DivDesc, Name, Desc, DescValue, ReserveBtn, HotelBox } from '../Auth';
import { GetResume } from '../../services/hotelApi';
import useToken from '../../hooks/useToken';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { AuthContext } from '../../contexts/Auth';

export default function Resume() {
  const token = useToken();
  const [resumeRoom, setResumeRoom] = useState([]);
  const [resumeHotel, setResumeHotel] = useState([]);
  const { setChange } = useContext(AuthContext);
  const navigate = useNavigate();

  function getStringForCapacity() {
    switch (resumeRoom.capacity) {
    case 1:
      return 'Singles';
    case 2:
      return 'Double';
    case 3:
      return 'Triple';
    case 4:
      return 'Quadruple';
    case 5:
      return 'Quintuple';
    }
  }

  useEffect(() => {
    const promise = GetResume(token);

    promise.then((res) => {
      console.log(res);

      setResumeRoom(res.Room);
      console.log(resumeRoom);
      setResumeHotel(res.Hotel);
      console.log(resumeHotel);
    });

    promise.catch((err) => {
      alert('erro', err.response.data);
    });
  }, []);

  function handleSwitch() {
    navigate('/dashboard/hotel');
    setChange(true);
  }
  return (
    <>
      <Title>Ingresso e pagamento</Title>
      <HotelBox>
        <Image src={resumeHotel.image} />
        <DivDesc>
          <Name>{resumeHotel.name}</Name>
          <Desc>Quarto reservado:</Desc>
          <DescValue>
            {resumeRoom.name} ({getStringForCapacity()})
          </DescValue>
          <Desc>Pessoas no seu quarto</Desc>
          <DescValue>
            {resumeRoom.capacity === 1
              ? 'Apenas você'
              : `Você e mais ${resumeRoom.capacity - 1} ${resumeRoom.capacity >= 3 ? 'pessoas' : 'pessoa'}`}
          </DescValue>
        </DivDesc>
      </HotelBox>
      <ReserveBtn
        onClick={() => {
          handleSwitch();
        }}
      >
        TROCAR DE QUARTO
      </ReserveBtn>
    </>
  );
}

const Title = styled.h1`
  font-size: 34px;
  font-weight: 400;
  color: #000000;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 37px;
`;
