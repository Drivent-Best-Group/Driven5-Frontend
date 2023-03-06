import { AuthContext } from '../../contexts/Auth';
import Reservation from '../../components/Payment/Reservation';
import { useContext, useEffect, useState } from 'react';
import { Subtitle, Box, Options } from '../../style/paymentStyle';
import { getTickets } from '../../services/paymentApi';
import useToken from '../../hooks/useToken';

export default function Accomodation({ setShowPayment, setTicketData }) {
  const { accomodation, ticket, setTicket } = useContext(AuthContext);
  const [cards, setCards] = useState([]);
  const token = useToken();

  useEffect(() => {
    const promise = getTickets(token);

    promise.then((res) => {
      const newCards = res.filter((card) => card.isRemote === false);
      setCards(newCards);
    });

    promise.catch((err) => {
      console.log('erro ticket', err.response.data);
    });
  }, [setCards]);

  function handleClick(ticket) {
    setTicket(ticket);
  }

  return (
    <>
      <Subtitle>Ótimo! Agora escolha sua modalidade de hospedagem</Subtitle>
      <Options>
        {cards.map((card) => {
          return (
            <Box key={card.id} onClick={() => handleClick(card)} clicked={ticket.id === card.id}>
              <h1>{card.includesHotel ? 'Com Hotel' : 'Sem Hotel'}</h1>
              <h2>+ R${card.includesHotel ? '350' : '0'}</h2>
            </Box>
          );
        })}
      </Options>
      {accomodation !== null ? <Reservation setShowPayment={setShowPayment} setTicketData={setTicketData} /> : ''}
    </>
  );
}
