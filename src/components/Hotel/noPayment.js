import { Text } from '../../style/paymentStyle';
import useToken from '../../hooks/useToken';
import { useEffect, useState } from 'react';
import HotelComponent from '.';
import { getHotelInformation } from '../../services/paymentApi';

export default function NoPayment() {
  const token = useToken();
  const [paid, setPaid] = useState();

  useEffect(() => {
    const promise = getHotelInformation(token);

    promise.then((res) => {
      setPaid(res.status);
    });

    promise.catch((err) => {
      console.log('erro ticket', err.response.data);
    });
  }, []);

  return (
    <>
      <Text>
        {paid === 'PAID'
          ?
          <HotelComponent/>
          :
          <Text>
           Você precisa ter confirmado pagamento
            <br />
           antes de fazer a escolha de hospedagem
          </Text>
        }
      </Text>
    </>
  );
}
