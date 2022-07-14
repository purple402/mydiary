import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Title } from '../components';
const WritingDiv = styled.div`
  padding: 0 20px;
`;

const StyledLabel = styled.label`
  display: flex;
  justify-content: space-between;
  margin: 6px 0;
`;

const StyledInput = styled.input`
  font-size: 15px;
  padding: 8px;
  border: 1px solid rgba(128, 128, 128, 0.253);
`;

const StyledDateInput = styled.input`
  font-size: 16px;
  padding: 6px 7px 2px 7px;
  border: 1px solid rgba(128, 128, 128, 0.253);
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  height: 150px;
  resize: none;
  font-size: 18px;
  padding: 15px;
  border: 1px solid rgba(128, 128, 128, 0.253);
  border-radius: 10px;
  box-sizing: border-box;
`;


function Write() {
  const dateRef = useRef<HTMLInputElement>(null);
  const [inputs, setInputs] = useState<RecordType>({
    title: '',
    date: '',
    contents: '',
    tags: [],
  });
  function onChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
  }

  function handleSubmit(e: React.FormEvent<HTMLButtonElement>) {
  }

  function handleCancel(): void {
  }

  // :TODO 태그 입력 받는 함수
  function onCheckEnter(e: React.KeyboardEvent<HTMLInputElement>) {
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
          <div>
            <button type="button" onClick={handleCancel}>
              다음에 쓰기
            </button>
            <button type="submit" onClick={(e) => handleSubmit(e)}>
              저장하기
            </button>
          </div>
        </form>
      </WritingDiv>
    </div>
  );
}

export default Write;
