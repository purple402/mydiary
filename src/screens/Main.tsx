import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Title, Diary } from '../components';
import { DiaryType } from '../types';

const CountDiary = styled.div`
  font-size: 15px;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 40px;
`;

function Main() {
  const [diary, setDiary] = useState<DiaryType>({});
  const [diaryCount, setDiaryCount] = useState<number>(0);
  useEffect(() => {
    const stringDiary: string | null = localStorage.getItem('diary');
    if (stringDiary) {
      const objectDiary: DiaryType = JSON.parse(stringDiary);
      setDiary(objectDiary);
    }
  }, []);

  useEffect(() => {
    if (diary) {
      setDiaryCount(Object.keys(diary).length);
    }
  }, [diary]);

  return (
    <div>
      <Title />
      <CountDiary>
        <span>{diaryCount === 0 ? '첫 번째 일기를 작성해 봐요!' : `${diaryCount}개의 일기가 있습니다`}</span>
      </CountDiary>
      <Diary diary={diary} />
    </div>
  );
}

export default Main;
