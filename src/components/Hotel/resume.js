import { Box, Image, DivDesc, Name, Desc, DescValue } from '../Auth';

export default function Resume() {
  return(
    <Box>
      <Image/>
      <DivDesc>
        <Name>Nome do Hotel</Name>
        <Desc>Quarto reservado:</Desc>
        <DescValue>Teste</DescValue>
        <Desc>Pessoas no seu quarto</Desc>
        <DescValue>Teste</DescValue>
      </DivDesc>
    </Box>
  );
}
