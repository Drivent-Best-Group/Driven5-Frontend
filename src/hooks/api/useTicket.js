import useAsync from '../useAsync';
import useToken from '../useToken';
import * as userTicketApi from '../../services/userTicketApi';

export default function useTicket() {
  const token = useToken();
  const {
    data: ticket,
    loading: ticketLoading,
    error: ticketError,
    act: getTicket,
  } = useAsync(() => userTicketApi.getUserTickets(token));

  return {
    ticket,
    ticketLoading,
    ticketError,
    getTicket,
  };
}
