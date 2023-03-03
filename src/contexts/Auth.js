import React, { createContext, useState } from 'react';

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const [ticket, setTicket] = useState({});
  const [ticket2, setTicket2] = useState({});
  const [accomodation, setAccomodation] = useState(null);

  return (
    <AuthContext.Provider value={{ ticket, setTicket, accomodation, setAccomodation, ticket2, setTicket2 }}>{children}</AuthContext.Provider>
  );
}
