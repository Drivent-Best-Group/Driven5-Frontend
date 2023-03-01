import { useState } from 'react';
import { Subtitle, Options, Box } from '../../style/paymentStyle';

export default function Accomodation() {
  const [clicked, setClick] = useState(false);

  return (
    <>
      <Subtitle>Ótimo! Agora escolha sua modalidade de hospedagem</Subtitle>
      <Options>
        <Box>
          <h1>Sem Hotel</h1>
          <h2>+R$ 0</h2>
        </Box>
        <Box>
          <h1>Com Hotel</h1>
          <h2>+R$ 350</h2>
        </Box>
      </Options>
    </>
  );
}
