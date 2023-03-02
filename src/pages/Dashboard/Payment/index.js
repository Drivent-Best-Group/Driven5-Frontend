import Ticket from '../../../components/Payment/Ticket';
import styled from 'styled-components';
import Accomodation from '../../../components/Payment/Accommodation';
import Reservation from '../../../components/Payment/Reservation';
import CreditCard from '../../../components/Payment/CreditCard';

export default function Payment() {
  return (
    <>
      <Title>Ingresso e pagamento</Title>
      <Ticket/>
      <Accomodation/>
      <Reservation />
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

