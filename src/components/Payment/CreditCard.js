import styled from 'styled-components';
import { useState } from 'react';
import React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { Subtitle, ValidCvc, BoxCard, PaymentForm, ReservationButton, Loading } from '../../style/paymentStyle';
import axios from 'axios';
import useToken from '../../hooks/useToken';
import { useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import { useEffect } from 'react';
 
export default function CreditCard(props) {
  const { userData: user } = useContext(UserContext);
  const token = useToken();
  const [payment, setPayment] = useState(false);
  const [loading, setLoading] = useState(false);
  const [paymentData, setPaymentData] = useState({});
  const [teste, setTeste] = useState({});
  const [form, setForm] = useState({
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  });

  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  const body = {
    ticketId: props.ticketId,
    cardData: {
      issuer: 'Driven',
      number: form.number,
      name: form.name,
      expirationDate: form.expiry,
      cvv: form.cvc
    }
  };

  useEffect(() => {
    setLoading(true);
    const promise = axios.get(`http://localhost:4000/payments?ticketId=${props.ticketPaid}`, config ); //trocar URL depois
    promise.then((res) => {
      setPaymentData(res);
      setPayment(true);
      setLoading(false);
    });
    promise.catch((res) => {
      setPayment(false);
      setLoading(false);
    });
  }, []);

  async function confirmPayment(event) {
    event.preventDefault();
    if(/[^0-9]/g.test(form.number) || /[^0-9]/g.test(form.expiry) || /[^0-9]/g.test(form.cvc) || /[^a-zA-Z ]/g.test(form.name)) {
      return alert('Revise os dados do seu cartão e tente novamente');
    }

    setLoading(true);
    const promise = axios.post('http://localhost:4000/payments/process', body, config ); //trocar URL depois
    promise.then((res) => {
      setPayment(true);
      setLoading(false);
    });
    promise.catch((res) => {
      alert('Sua forma de pagamento foi recusada, tente novamente');
      setLoading(false);
    });
  };

  return (
    <>
      { loading ? <Loading><div className='lds-dual-ring'/></Loading> :
        <>
          <Subtitle>Ingresso escolhido</Subtitle>
          <BoxCard>
            <h1>{props.ticketType}</h1>
            <h2>{'R$ ' + props.price}</h2>
          </BoxCard>
          <Subtitle>Pagamento</Subtitle>
          { payment ? <Icon>
            <ion-icon name="checkmark-circle"></ion-icon>
            <h3> Pagamento confirmado! <br/> <span className='normal'>Prossiga para escolha de hospedagem e atividades</span> </h3>
          </Icon> :
            <PaymentForm>
              <Cards
                cvc={form.cvc}
                expiry={form.expiry}
                focused={form.focus}
                name={form.name}
                number={form.number}
              />
              <form onSubmit={ confirmPayment }>
                <input
                  type="tel"
                  name="number"
                  placeholder="Card Number"
                  onChange={(e) => setForm({ ...form, number: e.target.value })}
                  onFocus={(e) => setForm({ ...form, focus: e.target.name })}
                  maxLength={16}
                  minLength={16}
                  required={true}
                />
                <span>E.g.: 49..., 51..., 36..., 37...</span>
                <input
                  type="name"
                  name="name"
                  placeholder="Name"
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  onFocus={(e) => setForm({ ...form, focus: e.target.name  })}
                  maxLength={40}
                  minLength={4}
                  required={true}
                />
                <ValidCvc>
                  <input
                    type="tel"
                    name="expiry"
                    placeholder="Valid Thru"
                    onChange={(e) => setForm({ ...form, expiry: e.target.value })}
                    onFocus={(e) => setForm({ ...form, focus: e.target.name  })}
                    maxLength={4}
                    minLength={4}
                    required={true}
                  />
                  <input
                    type="tel"
                    name="cvc"
                    placeholder="CVC"
                    onChange={(e) => setForm({ ...form, cvc: e.target.value })}
                    onFocus={(e) => setForm({ ...form, focus: e.target.name  })}
                    maxLength={3}
                    minLength={3}
                    required={true}
                  />
                </ValidCvc>
                <ReservationButton type='submit' > FINALIZAR PAGAMENTO </ReservationButton>
              </form>
            </PaymentForm> } 
        </>}
    </>
  );
}

const Icon = styled.div`
  font-size: 44px;
  margin-left: -5px;
  display: flex;
  color: green;
  h3{
    margin-left: 8px;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #454545;
  }
  .normal{
    font-weight: normal;
    color: gray;
  }
`;

