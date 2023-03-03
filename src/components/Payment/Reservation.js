import { useContext } from 'react';
import styled from 'styled-components';
import { AuthContext } from '../../contexts/Auth';
import { Subtitle } from '../../style/paymentStyle';

export default function Reservation({ setShowPayment }) {
  const { ticket, accomodation } = useContext(AuthContext);
  let value = 100;
  if (ticket === 1) {
    if (accomodation === true) {
      value = 600;
    } else {
      value = 250;
    }
  }
  return (
    <>
      <Subtitle>Fechado! O total ficou em R${value} Agora é só confirmar</Subtitle>
      <ReservationButton onClick={() => setShowPayment(true)}>RESERVAR INGRESSO</ReservationButton>
    </>
  );
}

const ReservationButton = styled.button`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  height: 37px;
  border: none;
`;
