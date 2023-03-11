import { Box, Image, DivDesc, Name, Desc, DescValue, ReserveBtn } from '../Auth';
import { GetResume } from '../../services/hotelApi';
import useToken from '../../hooks/useToken';
import { useEffect, useState } from 'react';

export default function Resume() {
  const token = useToken();
  const [resumeRoom, setResumeRoom] = useState([]);
  const [resumeHotel, setResumeHotel] = useState([]);

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
  return(
    <>
      <Box>
        <Image src={resumeHotel.image}/>
        <DivDesc>
          <Name>{resumeHotel.name}</Name>
          <Desc>Quarto reservado:</Desc>
          <DescValue>{resumeRoom.name}</DescValue>
          <Desc>Pessoas no seu quarto</Desc>
          <DescValue>{resumeRoom.capacity === 1 ? 'Apenas você' : `Você e mais ${resumeRoom.capacity - 1}` }</DescValue>
        </DivDesc>
      </Box>
      <ReserveBtn onClick={() => { alert('card troca de quarto'); }}>TROCAR DE QUARTO</ReserveBtn>
    </>
  );
}
