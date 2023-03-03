import Ticket from '../../../components/Payment/Ticket';
import styled from 'styled-components';
import Accomodation from '../../../components/Payment/Accommodation';
import Reservation from '../../../components/Payment/Reservation';
import CreditCard from '../../../components/Payment/CreditCard';
import { useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/Auth';

export default function Payment() {
  const { ticket, accomodation, ticket2, setTicket2 } = useContext(AuthContext);
  const [showPayment, setShowPayment] = useState(false);
  const [ticketData, setTicketData] = useState({ name: '', price: 0, ticket: {} });
  
  return (
    <>
      {!showPayment && (
        <>
          <Title>Ingresso e pagamento</Title>
          <Ticket />
          {!ticket.isRemote && <Accomodation setShowPayment={setShowPayment} setTicketData={setTicketData} ticketData={ticketData} />}
          {ticket.isRemote ? <Reservation setShowPayment={setShowPayment} setTicketData={setTicketData} ticketData={ticketData}/> : ''}
        </>
      )}
      {showPayment && <CreditCard ticketType={ticketData.name} price={ticketData.price} ticketId={ticket2.id} ticketPaid={ticket.id}/>}
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
