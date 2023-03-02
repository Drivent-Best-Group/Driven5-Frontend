import { useContext, useEffect, useState } from 'react';
import { Subtitle, Options, Box } from '../../style/paymentStyle';
import { AuthContext } from '../../contexts/Auth.js';
//import axios from 'axios';
//import * as paymentApi from '../../services/paymentApi';
import useToken from '../../hooks/useToken';
//import api from '../../services/api';
import { getTickets } from '../../services/paymentApi';

export default function Ticket() {
  const { ticket, setTicket } = useContext(AuthContext);
  const [cards, setCards] = useState([]);
  const token = useToken();

  useEffect(() => {
    const promise = getTickets(token);

    promise.then((res) => {
      let data = res.data;
      console.log(res);
      setCards(data);
    });

    promise.catch((err) => {
      console.log('erro ticket', err.response.data);
    });
  }, [setCards]);

  function handleClick(id) {
    setTicket(id);
  }

  return (
    <>
      <Subtitle>Primeiro, escolha sua modalidade de Ingresso</Subtitle>
      <Options>
        <Box id={1} onClick={() => handleClick(1)} clicked={ticket === 1}>
          <h1>Presencial</h1>
          <h2>R$ 250</h2>
        </Box>
        <Box id={2} onClick={() => handleClick(2)} clicked={ticket === 2}>
          <h1>Online</h1>
          <h2>R$ 100</h2>
        </Box>
      </Options>
      {/*  {tickets.map((t) =>
        <Options key={t.id}>
          <Box>
            <h1>{d.modalidade}</h1>
            <h2>{d.valor}</h2>
          </Box>
          <Box>
          <h1>{d.modalidade}</h1>
            <h2>{d.valor}</h2>
          </Box>
        </Options>
      )} */}
    </>
  );
}
