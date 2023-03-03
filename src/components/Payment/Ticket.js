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
      console.log(res);
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
      <Subtitle>Primeiro, escolha sua modalidade de Ingresso</Subtitle>
      <Options>
        {cards.map((c) =>
          <Box key={c.id} onClick={() => { handleClick(c); }}>
            <h1>{c.name}</h1>
            <h2>R${c.price}</h2>
          </Box>
        )}
      </Options>
    </>
  );
}
