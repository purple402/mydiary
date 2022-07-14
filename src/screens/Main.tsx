import React from 'react';
import { Link } from 'react-router-dom';

function Main() {
  return (
    <div>
      <h1>Main!</h1>
      <Link to="/write">작성하기</Link>
    </div>
  );
}

export default Main;
