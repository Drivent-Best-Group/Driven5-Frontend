import styled from 'styled-components';
import { Subtitle } from '../../style/paymentStyle';
import { AuthContext } from '../../contexts/Auth';
import { useContext } from 'react';

export default function Reservation({ setShowPayment, setTicketData }) {
  const { ticket, accomodation } = useContext(AuthContext);
  let value = 0;
  let ticketName = '';
  value = ticket.price;
  ticketName = ticket.name;

  function setData() {
    setShowPayment(true);
    setTicketData({ price: value, name: ticketName });
  }

  return (
    <>
      <Subtitle>Fechado! O total ficou em R${value} Agora é só confirmar</Subtitle>
      <ReservationButton>RESERVAR INGRESSO</ReservationButton>
    </>
  );
}

const ReservationButton = styled.button`
font-family: "Roboto", sans-serif;
font-size: 14px;
height: 37px;
`;
