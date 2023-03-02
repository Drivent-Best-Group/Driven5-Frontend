import styled from 'styled-components';
import { useState } from 'react';
import React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { Subtitle, ValidCvc, ReservationButton, BoxCard, PaymentForm } from '../../style/paymentStyle';
 
export default function CreditCard(props) {
  const [form, setForm] = useState({
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  });

  return (
    <>
      <Subtitle>Ingresso escolhido</Subtitle>
      <BoxCard>
        <h1>{props.ticketType}</h1>
        <h2>{'R$ ' + props.price}</h2>
      </BoxCard>
      <Subtitle>Pagamento</Subtitle>
      <PaymentForm>
        <Cards
          cvc={form.cvc}
          expiry={form.expiry}
          focused={form.focus}
          name={form.name}
          number={form.number}
        />
        <form>
          <input
            type="tel"
            name="number"
            placeholder="Card Number"
            onChange={(e) => setForm({ ...form, number: e.target.value })}
            onFocus={(e) => setForm({ ...form, focus: e.target.name })}
            maxLength={16}
          />
          <span>E.g.: 49..., 51..., 36..., 37...</span>
          <input
            type="name"
            name="name"
            placeholder="Name"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            onFocus={(e) => setForm({ ...form, focus: e.target.name  })}
            maxLength={40}
          />
          <ValidCvc>
            <input
              type="tel"
              name="expiry"
              placeholder="Valid Thru"
              onChange={(e) => setForm({ ...form, expiry: e.target.value })}
              onFocus={(e) => setForm({ ...form, focus: e.target.name  })}
              maxLength={4}
            />
            <input
              type="tel"
              name="cvc"
              placeholder="CVC"
              onChange={(e) => setForm({ ...form, cvc: e.target.value })}
              onFocus={(e) => setForm({ ...form, focus: e.target.name  })}
              maxLength={3}
            />
          </ValidCvc>
          <ReservationButton>FINALIZAR PAGAMENTO</ReservationButton>
        </form>
      </PaymentForm>
    </>
  );
}

