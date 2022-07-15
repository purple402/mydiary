import React from 'react';
import styled from 'styled-components';
import Record from './Record';
import { DiaryType } from '../types';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
  padding-bottom: 50px;
`;

// Record들로 HTMLElement 만들기
function createHTMLRecordList(diary: DiaryType): JSX.Element[] {
  const HTMLRecordList: JSX.Element[] = [];
  Object.entries(diary).forEach(([key, value]) => {
    const numberKey = Number(key);
    HTMLRecordList.push(<Record key={key} recordNumber={numberKey} record={value} />);
  });
  return HTMLRecordList.reverse();
}

function Diary({ diary }: { diary: DiaryType }) {
  const recordList: JSX.Element[] = createHTMLRecordList(diary);
  return <Container>{recordList}</Container>;
}

export default Diary;
