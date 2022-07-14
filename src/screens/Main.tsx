import React from 'react';
import styled from 'styled-components';
import { Title, Diary } from '../components';
const CountDiary = styled.div`
  font-size: 15px;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 40px;
`;

function Main() {
  return (
    <div>
      <Title />
      <CountDiary>
        <span>00개의 일기 목록</span>
      </CountDiary>
      <Diary diary={diary} />
    </div>
  );
}

export default Main;
