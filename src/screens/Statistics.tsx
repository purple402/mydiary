import React from 'react';
import styled from 'styled-components';
import { Title, TagList } from '../components';
import { DiaryType, RecordType } from '../types';

// interface StatisticsTypes {
//   days: number;
//   totalNumOfChar: number;
//   totalTagNumber: number;
// }

const StatisticsDiv = styled.div`
  padding: 0 20px;
`;

function removeDuplicates(list: string[]): string[] {
  const noDuplicates: string[] = [];
  list.forEach((element) => {
    if (!noDuplicates.includes(element)) {
      noDuplicates.push(element);
    }
  });
  return noDuplicates;
}

function countContents(list: string[]): number {
  let totalLength = 0;
  list.forEach((element) => {
    totalLength += element.length;
  });
  return totalLength;
}

function Statistics() {
  const stringDiary: string | null = localStorage.getItem('diary');
  let totalDateList: string[] = [];
  const totalContentsList: string[] = [];
  let totalTagsList: string[] = [];

  if (stringDiary) {
    const objectDiary: DiaryType = JSON.parse(stringDiary);
    const arrayRecords: RecordType[] = Object.values(objectDiary);
    arrayRecords.forEach((record: RecordType) => {
      totalDateList.push(record.date);
      totalContentsList.push(record.contents);
      record.tags.forEach((tag) => totalTagsList.push(tag));
    });
  }
  // 중복 제거
  totalDateList = removeDuplicates(totalDateList);
  totalTagsList = removeDuplicates(totalTagsList);
  // 글자수세기
  const totalContesLength: string = countContents(totalContentsList).toString();

  const totalDateNum = `지금까지 ${totalDateList.length}일 동안`;
  const totalContentsNum = `총 ${totalContesLength}자의 일기를 썼어요!`;
  const totalTagsNum = `일기에 총 ${totalTagsList.length}개의 태그를 사용했어요`;

  return (
    <div>
      <Title />
      <StatisticsDiv>
        <span> 당신의 기록 </span>
        <div>
          <p>{totalDateNum}</p>
          <span>{totalContentsNum}</span>
        </div>
        <div>
          <span>{totalTagsNum}</span>
        </div>
        <TagList tags={totalTagsList} />
      </StatisticsDiv>
    </div>
  );
}

export default Statistics;
