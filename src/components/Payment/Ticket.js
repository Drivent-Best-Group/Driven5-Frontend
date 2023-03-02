import { Subtitle, Options, Box } from '../../style/paymentStyle';
import { useEffect, useState } from 'react';
import axios from 'axios';
import * as paymentApi from '../../services/paymentApi';
import useToken from '../../hooks/useToken';
import api from '../../services/api';
import { getTickets } from '../../services/paymentApi';

export default function Ticket() {
  const [tickets, setTickets] = useState([]);
  const token = useToken();

  useEffect(() => {
    const promise = getTickets(token);

    promise.then((res) => {
      let data = res.data;
      console.log(res);
      setTickets(data);
    });

    promise.catch((err) => {
      console.log('erro ticket', err.response.data);
    });  
  }, [setTickets]);

  return (
    <>
      <Subtitle>Primeiro, escolha sua modalidade de Ingresso</Subtitle>
      <Options>
        <Box>
          <h1>Presencial</h1>
          <h2>R$ 250</h2>
        </Box>
        <Box>
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

