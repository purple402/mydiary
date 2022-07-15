import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface TagTypes {
  tags: string[];
  // 초기화 설정해도 에러가 나옴
  // eslint-disable-next-line react/require-default-props
  useDelBtn?: boolean;
}

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

function TagList({ tags, useDelBtn = false }: TagTypes) {
  const [tagArray, setTagArray] = useState<string[]>([]);
  useEffect(() => {
    setTagArray(tags);
  }, [tags]);
  let tagsElement: JSX.Element[] = [];
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
          {useDelBtn && ' X'}
        </TagButton>,
      );
    }
    return HTMLTagList;
  }
  tagsElement = createHTMLTagList(tagArray);

  return <div>{tagsElement}</div>;
}

export default TagList;
