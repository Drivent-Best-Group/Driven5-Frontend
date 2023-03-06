import { AuthContext } from '../../contexts/Auth';
import { useState, useContext, useEffect } from 'react';
import { Subtitle, Options, Box } from '../../style/paymentStyle';
import useToken from '../../hooks/useToken';
import { getTickets } from '../../services/paymentApi';

export default function Ticket() {
  const { ticket, setTicket } = useContext(AuthContext);
  const [cards, setCards] = useState([]);
  const token = useToken();
  console.log(ticket);
  console.log(cards);
  useEffect(() => {
    const promise = getTickets(token);

    promise.then((res) => {
      const newCards = res.filter((card) => card.includesHotel === false);
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
      <Subtitle>Primeiro, escolha sua modalidade de Ingresso</Subtitle>
      <Options>
        {cards.map((card) => {
          return (
            <Box key={card.id} onClick={() => handleClick(card)} clicked={ticket.id === card.id}>
              <h1>{card.name}</h1>
              <h2>R${card.price}</h2>
            </Box>
          );
        })}
      </Options>
    </>
  );
}
