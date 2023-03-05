import api from './api';

export async function getUserEnrollment(token) {
  const response = await api.get('/enrollments', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
