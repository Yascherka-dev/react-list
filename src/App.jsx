import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PostsList from './components/PostsList';  
import PostSingle from './components/PostSingle';  

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostsList />} />
        <Route path="/post/:id" element={<PostSingle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
