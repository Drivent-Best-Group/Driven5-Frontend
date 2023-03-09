import styled from 'styled-components';
import NoHotel from '../../../components/Hotel/noHotel';

export default function Hotel() {
  //const { ticket, setTicket, ticketType, setTicketType } = useContext(AuthContext);
 
  return (
    <>
      <Title>Escolha de hotel e quarto</Title>
      <NoHotel />
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
