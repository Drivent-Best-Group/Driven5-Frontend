import { Text } from '../../style/paymentStyle';
import { getPayment } from '../../services/paymentApi';
import useToken from '../../hooks/useToken';
import { useEffect, useState } from 'react';
import HotelComponent from '.';

export default function NoPayment() {
  const token = useToken();
  const [paid, setPaid] = useState();

  useEffect(() => {
    const promise = getPayment(token);

    promise.then((res) => {
      console.log('res no Payment', res.status);
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
          <h1>
          Você precisa ter confirmado pagamento antes de fazer a escolha de hospedagem
          </h1>
        }
      </Text>
    </>
  );
}
