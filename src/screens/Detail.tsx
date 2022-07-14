import React from 'react';
import styled from 'styled-components';
// import { RecordType } from '../types';

const Container = styled.div`
  display: flex;
  border: 2px solid gray;
  margin: 30px;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.span`
  font-size: 30px;
  font-weight: bold;
`;

const Date = styled.span``;

const Contents = styled.p``;

// { record, recordNumber }: { record: RecordType; recordNumber: number }
function Detail() {
  return (
    <Container>
      <Title>Title</Title>
      <Date>2022-07-14</Date>
      <Contents> 넣는 싹이 간에 기관과 두기 방황하여도, 가치를 길을 두손을 이것이다. 역사를 인생을 몸이 투명하되 것이다. 이는 그들의 얼마나 과실이 인도하겠다는 봄바람이다. 피는 가진 주며, 이것은 꽃이 끓는 있는 천하를 듣는다. 것이 온갖 풀밭에 물방아 위하여, 것은 운다. 그들은 품으며, 인류의 같지 보이는 끓는 있는가? 인생에 공자는 보이는 바이며, 놀이 보배를 것이다. 옷을 이상 이상, 없으면, 청춘의 피가 피다. 고동을 그들의 트고, 앞이 곧 얼마나 꾸며 위하여 청춘이 운다. </Contents>
      {/* 태그 리스트 만들기 */}
    </Container>
  );
}

export default Detail;
