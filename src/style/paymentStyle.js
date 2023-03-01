import styled from 'styled-components';

export const Subtitle = styled.p`
font-size: 20px;
font-weight: 400;
color: #8e8e8e;
font-family: "Roboto", sans-serif;
margin-bottom: 17px;
`;

export const Box = styled.div`
width: 145px;
height: 145px;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

margin-right: 20px;
margin-bottom: 40px;

border-radius: 20px;
border: 1px solid #CECECE;

font-size: 16px;
font-weight: 400;
font-family: "Roboto", sans-serif;

:hover{
  cursor:pointer
}

h1{
  color: #454545;
  margin-bottom: 3px;
}

h2{
  color: #898989;
}
`;

export const Options = styled.div`
display: flex;
`;
