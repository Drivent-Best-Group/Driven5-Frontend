import styled from 'styled-components';
import { useState } from 'react';
import { Subtitle, Options, Box } from '../../style/paymentStyle';

export default function Ticket() {
  const [clicked, setClick] = useState(false);
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
      
    </>
  );
}

