import React from 'react';
import styled from 'styled-components';
import { RecordType } from '../types';

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

const TagButton = styled.button`
  background-color: white;
  color: red;
  border: 1px solid gray;
  border-radius: 10px;
  padding: 5px 10px;
  margin-right: 10px;
`;

function createHTMLTagList(tags: string[]): JSX.Element[] {
  const tagList = tags;
  const HTMLTagList = [];
  for (let i = 0; i < tagList.length; i += 1) {
    // remove type annotation error 나옴
    const hashtag = `# ${tagList[i]}`;
    HTMLTagList.push(
      <TagButton type="button" key={i}>
        {hashtag}
      </TagButton>,
    );
  }
  return HTMLTagList;
}

function Record({ record }: { record: RecordType }) {
  let shortContents: string = record.contents.slice(0, 53);
  shortContents = `${shortContents}...`;
  const tagList: JSX.Element[] = createHTMLTagList(record.tags);

  return (
    <Container>
      <TitleDiv>
        <RecordTitle>{record.title}</RecordTitle>
        <span>{record.date}</span>
      </TitleDiv>
      <p>{shortContents}</p>
      <div>{tagList}</div>
    </Container>
  );
}

export default Record;
