import { useState, useContext } from 'react';
import { Subtitle, Options, Box } from '../../style/paymentStyle';
import { AuthContext } from '../../contexts/Auth';

export default function Accomodation() {
  const { accomodation, setAccomodation } = useContext(AuthContext);

  function toClick() {
    console.log('ola');          
  }

  return (
    <>
      <Subtitle>Ótimo! Agora escolha sua modalidade de hospedagem</Subtitle>
      <Options>
        <Box onClick={toClick}>
          <h1>Sem Hotel</h1>
          <h2>+R$ 0</h2>
        </Box>
        <Box onClick={toClick}>
          <h1>Com Hotel</h1>
          <h2>+R$ 350</h2>
        </Box>
      </Options>
    </>
  );
}
