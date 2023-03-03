import { useContext } from 'react';
import styled from 'styled-components';
import { AuthContext } from '../../contexts/Auth';
import { Subtitle } from '../../style/paymentStyle';

export default function Reservation({ setShowPayment, setTicketData }) {
  const { ticket, accomodation } = useContext(AuthContext);
  let value = 100;
  let ticketName = 'Online';
  if (ticket === 1) {
    if (accomodation === true) {
      value = 600;
      ticketName = 'Presencial + Hotel';
    } else {
      value = 250;
      ticketName = 'Presencial Sem Hotel';
    }
  }

  function teste() {
    setShowPayment(true);
    setTicketData({ price: value, name: ticketName });
  }

  return (
    <>
      <Subtitle>Fechado! O total ficou em R${value} Agora é só confirmar</Subtitle>
      <ReservationButton onClick={() => teste()}>RESERVAR INGRESSO</ReservationButton>
    </>
  );
}

const ReservationButton = styled.button`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  height: 37px;
  border: none;
`;
