import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

function Title() {
  return (
    <Container>
      <h1>mydiary</h1>
    </Container>
  );
}

export default Title;
