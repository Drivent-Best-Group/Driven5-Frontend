import React, { createContext, useState } from 'react';

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const [ticket, setTicket] = useState({ isRemote: false });
  const [accomodation, setAccomodation] = useState(null);

  return (
    <AuthContext.Provider value={{ ticket, setTicket, accomodation, setAccomodation }}>
      {children}
    </AuthContext.Provider>
  );
}
