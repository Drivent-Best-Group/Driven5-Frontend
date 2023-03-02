import { useContext } from 'react';
import { Subtitle, Options, Box } from '../../style/paymentStyle';
import { AuthContext } from '../../contexts/Auth.js';

export default function Ticket() {
  const { ticket, setTicket } = useContext(AuthContext);

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
    </>
  );
}
