import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Title, TagList } from '../components';
import { RecordType, DiaryType } from '../types';

const WritingDiv = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledLabel = styled.label`
  display: flex;
  justify-content: space-between;
  margin: 6px 0;
  padding: 0 30px;
`;

const StyledInput = styled.input`
  font-size: 15px;
  padding: 8px;
  border: 1px solid rgba(0, 0, 0, 0.588);
  border-radius: 2px;
  width: 250px;
  height: 17px;
`;

const StyledDateInput = styled.input`
  font-size: 16px;
  padding: 6px 7px 2px 7px;
  border: 1px solid rgba(0, 0, 0, 0.588);
  border-radius: 2px;
  width: 253px;
`;

const StyledTextarea = styled.textarea`
  width: 95%;
  height: 200px;
  resize: none;
  font-size: 16px;
  padding: 15px;
  border: 1px solid rgba(0, 0, 0, 0.588);
  border-radius: 2px;
  box-sizing: border-box;
  margin: 10px 0;
`;

const ButtonDiv = styled.div`
margin-top: 20px;
padding-right: 10px;
  display: flex;
  justify-content: space-evenly;
`;

const StyledFormButton = styled.button`
  margin: 0px 5px;
  padding: 10px 25px;
  border: 1px solid rgba(0, 0, 0, 0.695);
  border-radius: 20px;
  font-size: 16px;
  font-weight: 600;
  box-sizing: border-box;
  width: 150px;
`;

// 날짜 자리수 맞추기
function zero(value: number | string): string {
  return value.toString().length === 1 ? `0${value}` : `${value}`;
}

// 오늘 날짜 구하기
function getToday(): string {
  const today: Date = new Date();
  const dateValue: Date = new Date(today);

  // 새벽 3시에 날짜 바뀜
  const hours: number = today.getHours();
  if (hours < 3) {
    dateValue.setDate(today.getDate() - 1);
  }

  const year: number = dateValue.getFullYear();
  const month: number = dateValue.getMonth() + 1;
  const date: number = dateValue.getDate();

  return `${year}-${zero(month)}-${zero(date)}`;
}

function Write() {
  const dateRef = useRef<HTMLInputElement>(null);
  const [inputs, setInputs] = useState<RecordType>({
    title: '',
    date: '',
    contents: '',
    tags: [],
  });
  const navigate = useNavigate();

  function onChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { value, id } = e.target;
    setInputs({
      ...inputs,
      [id]: value,
    });
  }

  useEffect(() => {
    // 날짜 입력 기본값을 오늘로 한다
    const today: string = getToday();
    if (dateRef.current) {
      dateRef.current.value = today;
    }
    setInputs({
      ...inputs,
      date: today,
    });
  }, []);

  function handleSubmit(e: React.FormEvent<HTMLButtonElement>) {
    e.preventDefault();
    let stringDiary: string | null = null;
    stringDiary = localStorage.getItem('diary');
    let newDiary: DiaryType = {};
    if (stringDiary) {
      const objectDiary: DiaryType = JSON.parse(stringDiary);
      const recordId: string = (Object.keys(objectDiary).length + 1).toString();
      newDiary = {
        ...objectDiary,
        [recordId]: inputs,
      };
    } else {
      newDiary = { 1: inputs };
    }
    const stringNewDiary: string = JSON.stringify(newDiary);
    localStorage.setItem('diary', stringNewDiary);
    // Main으로 이동
    navigate('/');
  }

  function handleCancel(): void {
    // eslint-disable-next-line no-alert
    if (window.confirm('일기 작성을 취소하시겠습니까?')) {
      navigate('/');
    } else {
      // 머무르기
    }
  }

  // :TODO 태그 입력 받는 함수
  function onCheckEnter(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      e.preventDefault();
      const { tags } = inputs;
      const newTags: string[] = [...tags, e.target.value];
      setInputs({
        ...inputs,
        tags: newTags,
      });
      e.target.value = '';
    }
  }

  return (
    <div>
      <Title />
      <WritingDiv>
        <form id="writingFrom">
          <StyledLabel htmlFor="title">
            제목
            <StyledInput id="title" onChange={(e) => onChange(e)} required />
          </StyledLabel>
          <StyledLabel htmlFor="date">
            날짜
            <StyledDateInput id="date" type="date" ref={dateRef} onChange={(e) => onChange(e)} required />
          </StyledLabel>
          <StyledTextarea placeholder="매일 일어나 세수하고 양치하듯 하루의 마지막 일과, 일기 쓰기" id="contents" onChange={(e) => onChange(e)} required />
          <StyledLabel htmlFor="tag">
            태그
            <StyledInput id="tag" onKeyPress={(e) => onCheckEnter(e)} />
          </StyledLabel>
          <TagList tags={inputs.tags} />
          <ButtonDiv>
            <StyledFormButton type="button" onClick={() => handleCancel()}>
              다음에 쓰기
            </StyledFormButton>
            <StyledFormButton type="submit" onClick={(e) => handleSubmit(e)}>
              저장하기
            </StyledFormButton>
          </ButtonDiv>
        </form>
      </WritingDiv>
    </div>
  );
}

export default Write;
