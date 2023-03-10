import api from './api';

export async function getTickets(token) {
  const response = await api.get('/tickets/types', {
    headers: {
      Authorization: `Bearer ${token}`
    },
  });
  
  return response.data;
}

export async function getHotelInformation(token) {
  const response = await api.get('/tickets', {
    headers: {
      Authorization: `Bearer ${token}`
    },
  });
  
  return response.data;
}

