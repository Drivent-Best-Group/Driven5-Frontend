import useAsync from '../useAsync';
import useToken from '../useToken';
import * as userTicketTypeApi from '../../services/paymentApi';

export default function useTicketType() {
  const token = useToken();
  const {
    data: ticketType,
    loading: ticketTypeLoading,
    error: ticketTypeError,
    act: getTicketType,
  } = useAsync(() => userTicketTypeApi.getTickets(token));

  return {
    ticketType,
    ticketTypeLoading,
    ticketTypeError,
    getTicketType,
  };
}
