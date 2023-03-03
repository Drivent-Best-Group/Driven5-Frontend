import styled from 'styled-components';
import { Subtitle } from '../../style/paymentStyle';

export default function Reservation( ) {
  return(
    <>
      <Subtitle>Fechado! O total ficou em R$ ticketType.price .Agora é só confirmar</Subtitle>
      <ReservationButton>RESERVAR INGRESSO</ReservationButton>
    </>
  );
}

const ReservationButton = styled.button`
font-family: "Roboto", sans-serif;
font-size: 14px;
height: 37px;
`;
