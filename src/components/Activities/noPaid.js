import useToken from "../../hooks/useToken";
import { getHotelInformation } from "../../services/paymentApi";

export default function NotPaidComponent() {
  const token = useToken();
  const [paid, setPaid] = useState();

  useEffect(() => {
    const promise = getHotelInformation(token);

    promise.then((res) => {
      setPaid(res.status);
    });

    promise.catch((err) => {
      alert('erro', err.response.data);
    });
  }, []);

  return(
    <>    
    <>Apenas um texto</>
    </>
  )
}
