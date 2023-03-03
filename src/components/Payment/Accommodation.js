import { AuthContext } from '../../contexts/Auth';
import Reservation from '../../components/Payment/Reservation';

export default function Accomodation({ setShowPayment, setTicketData }) {
  const { accomodation, setAccomodation, ticket } = useContext(AuthContext);

  return (
    <>
      <Subtitle>Ótimo! Agora escolha sua modalidade de hospedagem</Subtitle>
      <Options>
        {ticket.includesHotel === false ? <Box onClick={() => setAccomodation(false)} clicked={accomodation === false}>
          <h1>Sem Hotel</h1>
          <h2>+R$ 0</h2>
        </Box> 
          :<>
            <Box onClick={() =>  setAccomodation(false)} clicked={accomodation === false}>
              <h1>Sem Hotel</h1>
              <h2>{ticket.price}</h2>
            </Box> 
            <Box onClick={() =>  setAccomodation(true)} clicked={accomodation === true}>
              <h1>Com Hotel</h1>
              <h2>{ticket.price}</h2>
            </Box>
          </> 
        }
      </Options>
      { accomodation !== null ? <Reservation setShowPayment={setShowPayment} setTicketData={setTicketData}/> : '' }
    </>
  );
}
