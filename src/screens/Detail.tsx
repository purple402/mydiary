import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';
import { TagList } from '../components';
import { DiaryType, RecordType } from '../types';

const Container = styled.div`
  display: flex;
  border: 1px solid rgba(0, 0, 0, 0.588);
  border-radius: 2px;
  margin: 30px 30px 20px 30px;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.span`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const Date = styled.span`
  font-size: 15px;
`;

const Contents = styled.p`
  margin: 20px 0;
`;

const StyledButton = styled.button`
  margin: 0 38px;
  padding: 10px 25px;
  border: 1px solid rgba(0, 0, 0, 0.695);
  border-radius: 5px;
  font-size: 14px;
  font-weight: 600;
  box-sizing: border-box;
  position: absolute;
  right: 0;
  color: ${(props) => props.color};
`;

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
      <StyledButton type="button" color="#0000ffb5" onClick={() => handleBackBtn()}>
        돌아가기
      </StyledButton>
    </div>
  );
}

export default Detail;
