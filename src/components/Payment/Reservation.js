import { useContext } from 'react';
import styled from 'styled-components';
import { AuthContext } from '../../contexts/Auth';
import { Subtitle } from '../../style/paymentStyle';
import axios from 'axios';
import useToken from '../../hooks/useToken';

export default function Reservation({ setShowPayment, setTicketData, ticketData, ticket }) {
  const token = useToken();
  const { setTicket2 } = useContext(AuthContext);
  // setTicket ticket
  let value = 0;
  let ticketName = '';
  value = ticket.price;
  ticketName = ticket.name;

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const ticketDataAPI = {
    ticketTypeId: ticket.id,
  };

  function setData() {
    const promise = axios.post('http://localhost:4000/tickets', ticketDataAPI, config); //trocar URL depois
    promise.then((res) => {
      setTicket2(res.data);
      setShowPayment(true);
      setTicketData({ price: value, name: ticketName });
    });
    promise.catch((res) => {
      console.log(res);
    });
  }

  return (
    <>
      <Subtitle>Fechado! O total ficou em R${value} Agora é só confirmar</Subtitle>
      <ReservationButton onClick={() => setData()}>RESERVAR INGRESSO</ReservationButton>
    </>
  );
}

const ReservationButton = styled.button`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  height: 37px;
  border: none;
`;
