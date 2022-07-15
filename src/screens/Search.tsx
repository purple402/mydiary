import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Title, TagList, Diary } from '../components';
import { DiaryType } from '../types';

interface SearchInputsType {
  startDate: string;
  endDate: string;
  tags: string[];
}

const SearchDiv = styled.div`
  padding: 0 20px;
`;

const StyledLabel = styled.label`
  display: flex;
  margin: 6px 0;
  align-items: center;
  justify-content: center;
`;

const StyledDateInput = styled.input`
  font-size: 16px;
  padding: 6px 7px 2px 7px;
  border: 1px solid rgba(128, 128, 128, 0.253);
  margin-right: 15px;
`;

const StyledInput = styled.input`
  font-size: 15px;
  padding: 8px;
  border: 1px solid rgba(128, 128, 128, 0.253);
`;

const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledButton = styled.button`
  margin-bottom: 5px;
`;

function checkDate(inputDate: string, filterType: string, filterObject: DiaryType) {
  let newObject: DiaryType = {};
  const newInputDate: Date = new Date(inputDate);
  switch (filterType) {
    case 'start':
      Object.entries(filterObject).forEach(([key, value]) => {
        const recordDate: Date = new Date(value.date);
        if (recordDate >= newInputDate) {
          newObject = {
            ...newObject,
            [key]: value,
          };
        }
      });
      break;
    case 'end':
      Object.entries(filterObject).forEach(([key, value]) => {
        const recordDate: Date = new Date(value.date);
        if (newInputDate >= recordDate) {
          newObject = {
            ...newObject,
            [key]: value,
          };
        }
      });
      break;
    default:
      newObject = filterObject;
  }
  return newObject;
}

function Search() {
  const navigate = useNavigate();
  // 입력값 관리
  const [inputs, setInputs] = useState<SearchInputsType>({
    startDate: '',
    endDate: '',
    tags: [],
  });
  const { startDate, endDate, tags }: SearchInputsType = inputs;
  // 검색 결과
  const [searchResult, setSearchResult] = useState<JSX.Element | null>(null);

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value, id } = e.target;
    setInputs({
      ...inputs,
      [id]: value,
    });
  }

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

  function handleSubmit(e: React.FormEvent<HTMLButtonElement>): void {
    e.preventDefault();
    const stringDiary: string | null = localStorage.getItem('diary');
    if (stringDiary === null) {
      // 에러 화면으로 이동하기
    } else {
      const objectDiary: DiaryType = JSON.parse(stringDiary);
      let filterObject: DiaryType = objectDiary;

      // 조건에 맞는 새 객체 만들기
      // 날짜 검색
      if (startDate) filterObject = checkDate(startDate, 'start', filterObject);
      if (endDate) filterObject = checkDate(endDate, 'end', filterObject);

      // 태그 검색
      if (tags.length !== 0) {
        let newObject: DiaryType = {};
        tags.forEach((tagValue) => {
          Object.entries(filterObject).forEach(([key, value]) => {
            const recordTags: string[] = value.tags;
            if (recordTags.includes(tagValue)) {
              newObject = {
                ...newObject,
                [key]: value,
              };
            }
          });
          filterObject = newObject;
          newObject = {};
        });
      }

      // 검색 결과 표시
      setSearchResult(displayResult(filterObject));
    }
  }

  function displayResult(filterObject: DiaryType): JSX.Element {
    console.log(filterObject);
    const resultLength = Object.keys(filterObject).length;
    return resultLength !== 0 ? <Diary diary={filterObject} /> : <span>검색 결과가 없습니다.</span>;
  }

  function handleCancelBtn(): void {
    navigate('/');
  }

  return (
    <div>
      <Title />
      <form>
        <SearchDiv>
          <StyledLabel htmlFor="startDate">
            <StyledDateInput id="startDate" type="date" onChange={(e) => onChange(e)} />
            부터
          </StyledLabel>
          <StyledLabel htmlFor="endDate">
            <StyledDateInput id="endDate" type="date" onChange={(e) => onChange(e)} />
            까지
          </StyledLabel>
          <StyledLabel htmlFor="tag">
            태그
            <StyledInput id="tag" onKeyPress={(e) => onCheckEnter(e)} />
          </StyledLabel>
          <TagList tags={inputs.tags} />
          <span>을 포함한</span>
          <ButtonDiv>
            <StyledButton type="submit" onClick={(e) => handleSubmit(e)}>
              일기 찾기
            </StyledButton>
            <StyledButton type="button" onClick={() => handleCancelBtn()}>
              전체 일기 보기
            </StyledButton>
          </ButtonDiv>
        </SearchDiv>
      </form>
      {searchResult}
    </div>
  );
}

export default Search;
