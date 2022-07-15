import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
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
  margin-top: 4px;
  &:hover {
    background-color: #ffdde3;
  }
`;

function TagList({ tags, useDelBtn = false }: TagTypes) {
  const [tagArray, setTagArray] = useState<string[]>([]);
  useEffect(() => {
    setTagArray(tags);
  }, [tags]);
  let tagsElement: JSX.Element[] = [];
  // const navigate = useNavigate();

  function handleClick(e: React.MouseEvent<HTMLButtonElement>): void {
    e.stopPropagation();
    const hashtag: string = (e.target as HTMLElement).id;
    if (!useDelBtn) {
      console.log(hashtag);
      // search 스크린으로 이동
    } else {
      // 클릭한 태그 삭제
      const newTags = tagArray.filter((item) => item !== hashtag);
      setTagArray(newTags);
    }
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
