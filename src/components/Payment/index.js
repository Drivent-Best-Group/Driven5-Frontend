import { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function PaymentComponent() {
  const [clicked, setClick] = useState(false);
  const [live, setLive] = useState(false);
    
  return (
    <>
      <Title>Ingresso e pagamento</Title>
      <Subtitle>Primeiro, escolha sua modalidade de Ingresso</Subtitle>
      <Options>
        <Box >
          <Text>Presencial</Text>
          <Price>R$ 250</Price>
        </Box>
        <Box>
          <Text>Online</Text>
          <Price>R$ 100</Price>
        </Box>
      </Options>
      <Subtitle>Ótimo! Agora escolha sua modalidade de hospedagem</Subtitle>
      <Options>
        <Box>
          <Text>Sem Hotel</Text>
          <Price>+ R$ 0</Price>
        </Box>
        <Box>
          <Text>Com Hotel</Text>
          <Price>+R$ 350</Price>
        </Box>
      </Options>
      <Subtitle>Fechado! O total ficou em R$.Agora é só confirmar</Subtitle>
      <button>RESERVAR INGRESSO</button>
    </>
  );
}

const Title = styled.h1`
font-size: 34px;
font-weight: 400;
color: #000000;
font-family: "Roboto", sans-serif;
margin-bottom: 37px;
`;

const Subtitle = styled.p`
font-size: 20px;
font-weight: 400;
color: #8e8e8e;
font-family: "Roboto", sans-serif;
margin-bottom: 17px;
`;

const Box = styled.div`
width: 145px;
height: 145px;
display: flex;
margin-right: 24px;
margin-bottom: 44px;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 20px;
border: 1px solid #CECECE;
:hover{
  cursor:pointer
}
`;

const Options = styled.div`
display: flex;
`;

const Text = styled.p`
font-size: 16px;
font-weight: 400;
color: #454545;
font-family: "Roboto", sans-serif;
margin-bottom: 3px;
`;
const Price = styled.p`
font-size: 16px;
font-weight: 400;
color: #898989;
font-family: "Roboto", sans-serif;
`;
const Reservation = styled.button`
font-family: "Roboto", sans-serif;
font-size: 14px;

`;
