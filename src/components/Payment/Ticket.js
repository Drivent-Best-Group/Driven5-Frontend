import { useContext, useEffect, useState } from 'react';
import { Subtitle, Options, Box } from '../../style/paymentStyle';
import { AuthContext } from '../../contexts/Auth.js';
//import axios from 'axios';
//import * as paymentApi from '../../services/paymentApi';
import useToken from '../../hooks/useToken';
//import api from '../../services/api';
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
      console.log(cards);
    });

    promise.catch((err) => {
      console.log('erro ticket', err.response.data);
    });
  }, [setCards]);

  function handleClick(id) {
    setTicket(id);
    if (id === 2) {
      setAccomodation(false);
    } else {
      setAccomodation(undefined);
    }
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
            <Box key={card.id} onClick={() => handleClick(card.id)} clicked = {ticket === card.id}>
              <h1>{card.name}</h1>
              <h2>R${card.price}</h2>
            </Box>
          );
        })}
      </Options>
    </>
  );
}
