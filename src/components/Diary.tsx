import React from 'react';
import Record from './Record';
import { DiaryType } from '../types';

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
  return <div>{recordList}</div>;
}

export default Diary;
