import React, { createContext, useState } from 'react';

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const [ticket, setTicket] = useState({ isRemote: true });
  const [ticket2, setTicket2] = useState({});
  const [ticketType, setTicketType] = useState({});
  const [accomodation, setAccomodation] = useState(null);

  return (
    <AuthContext.Provider value={{ ticket, setTicket, accomodation, setAccomodation, ticket2, setTicket2, ticketType, setTicketType }}>
      {children}
    </AuthContext.Provider>
  );
}
