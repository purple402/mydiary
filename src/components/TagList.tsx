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

function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
  e.stopPropagation();
  const hashtag: string = (e.target as HTMLElement).id;
  console.log(hashtag);
}

function createHTMLTagList(tags: string[]): JSX.Element[] {
  const tagList = tags;
  const HTMLTagList = [];
  for (let i = 0; i < tagList.length; i += 1) {
    // remove type annotation error 나옴
    const hashtag = `# ${tagList[i]}`;
    HTMLTagList.push(
      <TagButton type="button" key={i} id={tagList[i]} onClick={(e) => handleClick(e)}>
        {hashtag}
      </TagButton>,
    );
function TagList({ tags, useDelBtn = false }: TagTypes) {
  }
  return HTMLTagList;
}

  const tagList: JSX.Element[] = createHTMLTagList(tags);

  return <div>{tagList}</div>;
}

export default TagList;
