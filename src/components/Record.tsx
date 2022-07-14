import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { RecordType } from '../types';
import TagList from './TagList';

const Container = styled.div`
  width: 80%;
  border: 1px solid gray;
  margin-bottom: 10px;
  padding: 10px;
`;

const TitleDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

const RecordTitle = styled.span`
  font-size: 20px;
  font-weight: bold;
`;

function Record({ record, recordNumber }: { record: RecordType; recordNumber: number }) {
  const { title, date, contents, tags }: RecordType = record;
  let shortContents: string = contents.slice(0, 53);
  if (shortContents !== contents) {
    shortContents = `${shortContents}...`;
  }
  const navigate = useNavigate();

  function handleClick(): void {
    navigate(`./detail/${recordNumber}`);
  }

  return (
    <Container onClick={() => handleClick()}>
      <TitleDiv>
        <RecordTitle>{title}</RecordTitle>
        <span>{date}</span>
      </TitleDiv>
      <p>{shortContents}</p>
      <TagList tags={tags} />
    </Container>
  );
}

export default Record;
