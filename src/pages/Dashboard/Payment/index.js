import Ticket from '../../../components/Payment/Ticket';
import styled from 'styled-components';
import Accomodation from '../../../components/Payment/Accommodation';
import Reservation from '../../../components/Payment/Reservation';
import CreditCard from '../../../components/Payment/CreditCard';
import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../../contexts/Auth';
import useEnrollment from '../../../hooks/api/useEnrollment';
import { getUserTickets } from '../../../services/userTicketApi';
import useToken from '../../../hooks/useToken';

export default function Payment() {
  const { ticket, ticket2, setTicket2 } = useContext(AuthContext);
  const [showPayment, setShowPayment] = useState(false);
  const [ticketData, setTicketData] = useState({});
  const { enrollment } = useEnrollment();

  const token = useToken();

  useEffect(async() => {
    try {
      const promise = await getUserTickets(token);
      setTicket2(promise);
      setShowPayment(true);
    } catch (err) {
      console.log('erro', err.response.data);
    }
  }, []);

  if (!enrollment) {
    return (
      <>
        <Title>Ingresso e pagamento</Title>
        <Text>
          <p>Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso</p>
        </Text>
      </>
    );
  }

  return (
    <>
      <Title>Ingresso e pagamento</Title>
      {!showPayment && (
        <>
          <Ticket />
          {!ticket.isRemote ? <Accomodation setShowPayment={setShowPayment} setTicketData={setTicketData} /> : ''}
          {ticket.id === 2 ? (
            <Reservation
              setShowPayment={setShowPayment}
              setTicketData={setTicketData}
              ticketData={ticketData}
              ticket={ticket}
            />
          ) : (
            ''
          )}
        </>
      )}
      {showPayment && (
        <CreditCard
          ticketType={ticket2.TicketType.name}
          price={ticket2.TicketType.price}
          ticketId={ticket2.id}
          ticketPaid={ticket2.id}
        />
      )}
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

const Text = styled.div`
  height: 70%;
  width: 50%;
  margin: auto;
  display: flex;
  align-items: center;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  text-align: center;

  color: #8e8e8e;
`;
