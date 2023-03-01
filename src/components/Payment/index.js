import styled from 'styled-components';

export default function PaymentComponent() {
  return (
    <>
      <div>Ingresso e Pagamento</div>
      <p>Primeiro, escolha sua modalidade de Ingresso</p>
      <TicketType>
        <Box>
          <p>Presencial</p>
          <p>R$ 250</p>
        </Box>
        <Box>
          <p>Online</p>
          <p>R$ 100</p>
        </Box>
      </TicketType>
    </>
  );
}

const Box = styled.div`
width: 145px;
height: 145px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;
const TicketType = styled.div`
display: flex;
`;
