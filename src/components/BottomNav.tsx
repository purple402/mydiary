import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BookIcon, PenIcon, SearchIcon, ChartIcon } from './FontAwesome';

const Container = styled.div`
  border-top: 2px solid gray;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 55px;
  display: flex;
  flex-direction: row;
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 55px;
  width: 25%;
`;

function BottomNav() {
  const [activeNav, setActiveNav] = useState<number>(1);

  return (
    <Container>
      <Nav>
        <Link to="/" onClick={() => setActiveNav(1)}>
          <BookIcon isActive={activeNav === 1} />
        </Link>
      </Nav>
      <Nav>
        <Link to="/write" onClick={() => setActiveNav(2)}>
          <PenIcon isActive={activeNav === 2} />
        </Link>
      </Nav>
      <Nav>
        <Link to="/search" onClick={() => setActiveNav(3)}>
          <SearchIcon isActive={activeNav === 3} />
        </Link>
      </Nav>
      <Nav>
        <Link to="/Statistics" onClick={() => setActiveNav(4)}>
          <ChartIcon isActive={activeNav === 4} />
        </Link>
      </Nav>
    </Container>
  );
}

export default BottomNav;
