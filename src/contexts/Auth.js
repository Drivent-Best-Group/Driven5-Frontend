import React, { createContext, useState } from 'react';

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const [ticket, setTicket] = useState({ isRemote: true });
  const [ticket2, setTicket2] = useState({});
  const [ticketType, setTicketType] = useState({});
  const [accomodation, setAccomodation] = useState(null);
  const [hotel, setHotel] = useState({});
  const [showRooms, setShowRooms] = useState(false);
  const [hotelWRoom, setHotelWRoom] = useState([]);
  const [available, setAvailable] = useState(true);
  const [roomClicked, setRoomClicked] = useState({});
  const [showBtn, setShowBtn] = useState(false);
  const [change, setChange] = useState(false);
  return (
    <AuthContext.Provider
      value={{
        ticket,
        setTicket,
        accomodation,
        setAccomodation,
        ticket2,
        setTicket2,
        ticketType,
        setTicketType,
        hotel,
        setHotel,
        showRooms,
        setShowRooms,
        hotelWRoom,
        setHotelWRoom,
        available,
        setAvailable,
        roomClicked,
        setRoomClicked,
        showBtn,
        setShowBtn,
        change,
        setChange
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
