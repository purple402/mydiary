import React from 'react';
import styled from 'styled-components';

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

function TagList({ tags }: { tags: string[] }) {
  const tagList: JSX.Element[] = createHTMLTagList(tags);
  return <div>{tagList}</div>;
}

export default TagList;
