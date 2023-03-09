import { Text } from '../../style/paymentStyle';
import { useEffect, useState } from 'react';
import useToken from '../../hooks/useToken';
import { getHotelInformation } from '../../services/paymentApi';
import NoPayment from './noPayment';

export default function NoHotel() {
  const token = useToken();
  const [ticketType, setTicketType] = useState();

  useEffect(() => {
    const promise = getHotelInformation(token);

    promise.then((res) => {
      console.log(res);
      setTicketType(res.ticketTypeId);
    });

    promise.catch((err) => {
      console.log(err);
    });
  }, []);

  return (
    <>
      {ticketType !== 3
        ?
        <Text>
          Sua modalidade de ingresso não inclui hospedagem
          <br />
          Prossiga para a escolha de atividades
        </Text>
        :
        <NoPayment/>
      }
    </>
  );
}
