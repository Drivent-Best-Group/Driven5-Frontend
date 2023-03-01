import React, { createContext, useState } from 'react';

export const PaymentContext = createContext();

export function PaymentProvider({ children }) {
  const [ticket, setTicket] = useState(false);
  const [price, setPrice ] = useState(0);
  
  return (
    <PaymentContext.Provider value={{ ticket, setTicket, price, setPrice }}>
      {children}
    </PaymentContext.Provider>
  );
}
