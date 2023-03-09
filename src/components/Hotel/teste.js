import styled from 'styled-components';

export default function Teste() {
  return (
    <>
      <Text>
        Você precisa ter confirmado o pagamento antes <br/> de fazer a escolha de hospedagem
      </Text>
    </>
  );
}

const Text = styled.div`
  height: 70%;
  width: 70%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  text-align: center;

  color: #8e8e8e;
`;
