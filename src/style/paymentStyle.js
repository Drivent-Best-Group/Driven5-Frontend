import styled from 'styled-components';

export const Subtitle = styled.p`
  font-size: 20px;
  font-weight: 400;
  color: #8e8e8e;
  font-family: 'Roboto', sans-serif;
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
  border: ${(props) => (props.clicked ? 'none' : '1px solid #cecece' )};
  background-color: ${(props) => (props.clicked ? '#FFEED2' : '#FFFFFF')};
  font-size: 16px;
  font-weight: 400;
  font-family: 'Roboto', sans-serif;

  :hover {
    cursor: pointer;
  }

  h1 {
    color: #454545;
    margin-bottom: 3px;
  }

  h2 {
    color: #898989;
  }
`;

export const Options = styled.div`
  display: flex;
`;

export const ReservationButton = styled.button`
width: 182px;
height: 37px;
background: #E0E0E0;
box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
border-radius: 4px;
border-width: 0px;
margin-left: -290px;
margin-top: 35px;
z-index: 1;

:hover{
  cursor: pointer;
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.25);
}
`;

export const BoxCard = styled.div`
width: 290px;
height: 108px;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

margin-right: 20px;
margin-bottom: 40px;

border-radius: 20px;

font-size: 16px;
font-weight: 400;
font-family: "Roboto", sans-serif;

background-color: #FFEED2;

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

export const PaymentForm = styled.div`
    display: flex;
    form{
        display: flex;
        flex-direction: column;
    }
    input{
        margin-left: 30px;
        width: 350px;
        height: 45px;
        border-radius: 5px;
        border-color: #8e8e8e;
        border-width: 1px;
        border-style: solid;
        color: #8e8e8e;
        font-family: "Roboto", sans-serif;
        font-size: 17px;
        margin-bottom: 15px;
        padding-left: 8px
    }
    span{
        color: #8e8e8e;
        font-family: "Roboto", sans-serif;
        margin: -5px 0px 10px 30px;
    }
`;
export const ValidCvc = styled.div`
    display: flex;
    flex-direction: row;
    input:nth-child(1){
        width: 215px;
    }
    input:nth-child(2){
        width: 115px;
        margin-left: 20px;
    }
`;

export const Loading = styled.div`
  color: black;
    .lds-dual-ring {
    display: inline-block;
    width: 80px;
    height: 80px;
  }
  .lds-dual-ring:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 10px solid pink;
    border-color: pink transparent pink transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
