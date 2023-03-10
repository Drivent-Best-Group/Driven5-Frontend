import styled from 'styled-components'
import { Subtitle } from '../../style/paymentStyle'
export async function SwitchRoom(){
    return(
        <>
        <Subtitle>Você já escolheu seu quarto</Subtitle>
        <StyledSwitch>TROCAR DE QUARTO </StyledSwitch>
        </>
    )
}

const StyledSwitch = styled.button`
width: 182px;
height: 37px;

`