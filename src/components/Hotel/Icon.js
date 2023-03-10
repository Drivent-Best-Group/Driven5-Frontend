import { useEffect, useState } from 'react';
import { getRoomBookings } from '../../services/hotelApi';
import useToken from '../../hooks/useToken';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/Auth';
import styled from 'styled-components';

export default function IconComponent(props) {
  const {  showBtn, setShowBtn, roomClicked, setRoomClicked } = useContext(AuthContext);
  const [ people, setPeople ] = useState(0);
  const [ available, setAvailable ] = useState(true);

  function handleClick(room) {
    setRoomClicked(room);
    setShowBtn(true);
  }

  if(roomClicked == {}) {
    setShowBtn(false);
  }

  let capacityCss = {
    icon1: 'none',
    icon2: 'none',
    icon3: 'none'
  };

  if(props.room.capacity >= 1) {
    capacityCss.icon1 = 'inherit';
  }
  if(props.room.capacity >= 2) {
    capacityCss.icon2 = 'inherit';
  }
  if(props.room.capacity >= 3) {
    capacityCss.icon3 = 'inherit';
  }

  const token = useToken();
  getRoomBookings(token, props.room.id).then((res) => {
    setPeople(res.length);
    if(res.length >= props.room.capacity) {
      setAvailable(false);
    }
    else{
      setAvailable(true);
    }
  }).catch((res) => {console.log(res);});

  return(
    <>
      <RoomCard onClick={() => handleClick(props.room)} clicked={ roomClicked.id === props.room.id } available={available}>
        <RoomName>{props.room.name}</RoomName>
        <Icon>
          <ion-icon id="icon1" name={people >= 1 || roomClicked.id === props.room.id  ? 'person' : 'person-outline'} style={{ display: capacityCss.icon1, color: roomClicked.id === props.room.id ? '#FF4791': '' }}/>
          <ion-icon id="icon2" name={people >= 2 ? 'person' : 'person-outline'} style={{ display: capacityCss.icon2 }}/>
          <ion-icon id="icon3" name={people >= 3 ? 'person' : 'person-outline'} style={{ display: capacityCss.icon3 }}/>
        </Icon>
      </RoomCard>
    </>
  );
}

const Icon = styled.div`
  display: flex;
  font-size: 20px;
`;

const RoomName = styled.h3`
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
`;

const RoomCard = styled.div`
  width: 190px;
  height: 45px;
  
  background-color: white;
  
  border: 1px solid #cecece;
  border-radius: 10px;
  
  margin-right: 14px;

  border: ${(props) => (props.clicked ? 'none' : '1px solid #cecece' )};
  background-color: ${(props) => (props.clicked ? '#FFEED2' : '#EBEBEB')};

  background-color: ${(props) => (props.available ? '' : '#CECECE' )};
  pointer-events: ${(props) => (props.available ? 'all' : 'none' )};

  display: flex;
  align-items: center;

  padding: 0px 11px;

  justify-content: space-between;

  cursor: pointer;
`;
