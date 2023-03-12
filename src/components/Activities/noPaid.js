import useToken from "../../hooks/useToken";
import { getHotelInformation } from "../../services/paymentApi";

export default function NotPaidComponent() {
  const token = useToken();
  const [paid, setPaid] = useState();

  return(
    <>    
    <>Apenas um texto</>
    </>
  )
}
