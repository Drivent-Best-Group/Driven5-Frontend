import Ticket from '../../../components/Payment/Ticket';
import styled from 'styled-components';
import Accomodation from '../../../components/Payment/Accommodation';
import Reservation from '../../../components/Payment/Reservation';
import CreditCard from '../../../components/Payment/CreditCard';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/Auth';

export default function Payment() {
  const { ticket, accomodation } = useContext(AuthContext);
  return (
    <>
      <Title>Ingresso e pagamento</Title>
      <Ticket/>
      {ticket === 1 && <Accomodation/>}
      {ticket === 2 || accomodation !== undefined ? <Reservation /> : ''}
      <CreditCard ticketType={'Presencial + Com Hotel'} price={600}/>
    </>
  );
}

const Title = styled.h1`
font-size: 34px;
font-weight: 400;
color: #000000;
font-family: "Roboto", sans-serif;
margin-bottom: 37px;
`;

