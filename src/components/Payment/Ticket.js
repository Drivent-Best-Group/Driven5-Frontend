import { AuthContext } from '../../contexts/Auth';
import { useState, useContext, useEffect } from 'react';
import { Subtitle, Options, Box } from '../../style/paymentStyle';
import useToken from '../../hooks/useToken';
import { getTickets } from '../../services/paymentApi';

export default function Ticket() {
  const { ticket, setTicket, setAccomodation } = useContext(AuthContext);
  const [cards, setCards] = useState([]);
  const token = useToken();

  useEffect(() => {
    const promise = getTickets(token);

    promise.then((res) => {
      let data = res.data;
      console.log(data);
      setCards(res);
    });

    promise.catch((err) => {
      console.log('erro ticket', err.response.data);
    });
  }, [setCards]);
  
  function handleClick(ticket) {
    console.log(ticket);
    setTicket(ticket);
  }

  return (
    <>
      {/* <Subtitle>Primeiro, escolha sua modalidade de Ingresso</Subtitle>
      <Options>
        <Box id={1} onClick={() => handleClick(1)} clicked={ticket === 1}>
          <h1>Presencial</h1>
          <h2>R$ 250</h2>
        </Box>
        <Box id={2} onClick={() => handleClick(2)} clicked={ticket === 2}>
          <h1>Online</h1>
          <h2>R$ 100</h2>
        </Box>
      </Options> */}
      <Options>
        {cards.map((card) => {
          return (
            <Box key={card.id} onClick={() => handleClick(card)} clicked = {ticket.id === card.id}>
              <h1>{card.name}</h1>
              <h2>R${card.price}</h2>
            </Box>
          );
        })}
      </Options>
    </>
  );
}
