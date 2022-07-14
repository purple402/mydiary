import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Main, Search, Statistics, Write, Detail } from './screens';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/write" element={<Write />} />
        <Route path="/search" element={<Search />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
