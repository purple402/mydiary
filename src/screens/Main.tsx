import React from 'react';
import { Title } from '../components';
import styled from 'styled-components';
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
    </div>
  );
}

export default Main;
