import Ticket from '../../../components/Payment/Ticket';
import styled from 'styled-components';
import Accomodation from '../../../components/Payment/Accommodation';
import Reservation from '../../../components/Payment/Reservation';
import CreditCard from '../../../components/Payment/CreditCard';
import { useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/Auth';
import NoEnrollment from '../../../components/Payment/NoEnrollment';
export default function Payment() {
  const { ticket, accomodation } = useContext(AuthContext);
  const [showPayment, setShowPayment] = useState(false);
  const [ticketData, setTicketData] = useState({ name: '', price: 0, ticket: {} });
  const [userEnrollment, setUserEnrollment] = useState(undefined);

  return (
    <>
      <Title>Ingresso e pagamento</Title>
      {!showPayment && (
        <>
          <Ticket />
          {ticket === 1 && <Accomodation />}
          {ticket === 2 || accomodation !== undefined ? <Reservation setShowPayment={setShowPayment} /> : ''}
        </>
      )}
      {showPayment && <CreditCard ticketType={'Presencial + Com Hotel'} price={600} />}
      <NoEnrollment userEnrollment={userEnrollment} setUserEnrollment={setUserEnrollment} />
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
