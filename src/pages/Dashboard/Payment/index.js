import Ticket from '../../../components/Payment/Ticket';
import styled from 'styled-components';
import Accomodation from '../../../components/Payment/Accommodation';
import Reservation from '../../../components/Payment/Reservation';
import CreditCard from '../../../components/Payment/CreditCard';

export default function Payment() {
  return (
    <>
      {!showPayment && (
        <>
          <Title>Ingresso e pagamento</Title>
          <Ticket />
          {!ticket.isRemote && <Accomodation setShowPayment={setShowPayment} setTicketData={setTicketData} />}
          {ticket.isRemote ? <Reservation setShowPayment={setShowPayment} setTicketData={setTicketData}/> : ''}
        </>
      )}
      {showPayment && <CreditCard ticketType={ticketData.name} price={ticketData.price} ticketId={ticket.id}/>}
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

