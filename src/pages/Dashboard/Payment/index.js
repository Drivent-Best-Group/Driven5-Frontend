import Ticket from '../../../components/Payment/Ticket';
import styled from 'styled-components';
import Accomodation from '../../../components/Payment/Accommodation';

export default function Payment() {
  return (
    <>
      <Title>Ingresso e pagamento</Title>
      <Ticket/>
      <Accomodation/>
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
