import styled from 'styled-components';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../../contexts/Auth';
import { getUserTickets } from '../../../services/userTicketApi';
import useToken from '../../../hooks/useToken';

export default function Activities() {
  const { ticket2, setTicket2 } = useContext(AuthContext);
  const token = useToken();

  useEffect(async() => {
    try {
      const promise = await getUserTickets(token);
      setTicket2(promise);
    } catch (err) {
      console.log('erro', err.response.data);
    }
  }, []);

  if (ticket2.status === undefined) {
    return (
      <Text>
        <p>Carregando...</p>
      </Text>
    );
  }

  return (
    <>
      <Title>Escolha de atividades</Title>
      {ticket2.status === 'RESERVED' && (
        <Text>
          <p>Você precisa ter confirmado pagamento antes de fazer a escolha de atividades</p>
        </Text>
      )}
      {ticket2.TicketType.isRemote && (
        <Text>
          <p>Sua modalidade de ingresso não necessita escolher atividade. Você terá acesso a todas as atividades.</p>
        </Text>
      )}
    </>
  );
}

const Title = styled.h1`
  font-size: 34px;
  font-weight: 400;
  color: #000000;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 37px;
`;

const Text = styled.div`
  height: 70%;
  width: 60%;
  margin: auto;
  display: flex;
  align-items: center;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  text-align: center;

  color: #8e8e8e;
`;
