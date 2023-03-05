import { useEffect } from 'react';
import { StyledSpan } from '../../style/paymentStyle';
import { getUserEnrollment } from '../../services/userEnrollmentApi';
import useToken from '../../hooks/useToken';

export default function NoEnrollment() {
  const token = useToken();

  // useEffect(() => {
  //   const promise = getUserEnrollment(token);

  //   promise.then((res) => {
  //     let data = res.data;
  //     console.log(data);
  //     setUserEnrollment(data);
  //     console.log(userEnrollment);
  //   });
  //   promise.catch((err) => {
  //     console.log(err.response.data);
  //   });
  // });
  return (
    <>
      <StyledSpan>Você precisa completar sua inscrição antes de prosseguir com sua escolha</StyledSpan>
    </>
  );
}
