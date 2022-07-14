import React from 'react';
import styled from 'styled-components';
import { Title } from '../components';

const SearchDiv = styled.div`
  padding: 0 20px;
`;

const StyledLabel = styled.label`
  display: flex;
  margin: 6px 0;
  align-items: center;
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

function Search() {
  return (
    <div>
      <Title />
      <form>
        <SearchDiv>
          <StyledLabel htmlFor="startDate">
            <StyledDateInput id="startDate" type="date" />
            부터
          </StyledLabel>
          <StyledLabel htmlFor="endDate">
            <StyledDateInput id="endDate" type="date" />
            까지
          </StyledLabel>
          <StyledLabel htmlFor="tag">
            태그
            <StyledInput id="tag" />
            를 포함한
          </StyledLabel>
        </SearchDiv>
        <button type="submit">일기 찾기</button>
        <button type="button">전체 일기 보기</button>
      </form>
    </div>
  );
}

export default Search;
