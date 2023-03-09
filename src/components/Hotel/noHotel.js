import styled from 'styled-components';

export default function NoHotel() {
  return (
    <>
      <Text>
        Sua modalidade de ingresso não inclui hospedagem
        <br />
        Prossiga para a escolha de atividades
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
