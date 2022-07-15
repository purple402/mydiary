import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';
import { TagList } from '../components';
import { DiaryType, RecordType } from '../types';

const Container = styled.div`
  display: flex;
  border: 2px solid gray;
  margin: 30px;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.span`
  font-size: 30px;
  font-weight: bold;
`;

const Date = styled.span``;

const Contents = styled.p``;

function Detail() {
  const navigate = useNavigate();
  const { recordId } = useParams<string>();
  const [isPresent, setIsPresent] = useState<boolean>(false);
  const [record, setRecord] = useState<RecordType>({
    title: '',
    date: '',
    contents: '',
    tags: [],
  });
  const { title, date, contents, tags }: RecordType = record;
  useEffect(() => {
    const diary: string | null = localStorage.getItem('diary');
    if (diary) {
      const objectDiary: DiaryType = JSON.parse(diary);
      const diaryLength: number = Object.keys(objectDiary).length;
      const recordInt: number = parseInt(recordId as string, 10);
      if (recordInt <= diaryLength) {
        setRecord(objectDiary[recordInt]);
        setIsPresent(true);
      }
    }
  }, []);

  function handleBackBtn() {
    console.log('back');
    navigate(-1);
  }

  return (
    <div>
      {isPresent ? (
        <Container>
          <Title>{title}</Title>
          <Date>{date}</Date>
          <Contents>{contents}</Contents>
          <TagList tags={tags} />
        </Container>
      ) : (
        <Container>
          <Contents>일기가 존재하지 않습니다. 주소를 다시 확인해 주세요.</Contents>
        </Container>
      )}
      <button type="button" onClick={() => handleBackBtn()}>
        돌아가기
      </button>
    </div>
  );
}

export default Detail;
