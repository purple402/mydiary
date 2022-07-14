import React from 'react';
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
  let shortContents: string = record.contents.slice(0, 53);
  if (shortContents !== record.contents) {
    shortContents = `${shortContents}...`;
  }


  return (
    <Container>
      <TitleDiv>
        <RecordTitle>{record.title}</RecordTitle>
        <span>{record.date}</span>
      </TitleDiv>
      <p>{shortContents}</p>
      <TagList tags={record.tags} />
    </Container>
  );
}

export default Record;
