import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { About } from './pages/About';

function App() {
  return (
    <Routes>
      <Route path="/" index element={<About />} />
      <Route path="*" element={<p>Page Not Exists</p>} />
    </Routes>
  );
}

export default App;
