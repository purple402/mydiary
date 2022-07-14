import React from 'react';
import Record from './Record';
import { DiaryType } from '../types';

function createHTMLRecordList(diary: DiaryType): JSX.Element[] {
  const HTMLRecordList = [];
  const diaryKeys: string[] = Object.keys(diary);
  for (let i = diaryKeys.length; i > 0; i -= 1) {
    HTMLRecordList.push(<Record key={i} recordNumber={i} record={diary[i]} />);
  }
  return HTMLRecordList;
}

function Diary({ diary }: { diary: DiaryType }) {
  const recordList: JSX.Element[] = createHTMLRecordList(diary);
  return <div>{recordList}</div>;
}

export default Diary;
