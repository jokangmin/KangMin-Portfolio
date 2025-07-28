//import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { AnimationProvider } from './context/AnimationContext.tsx';

function App() {
  return (
    <Router>
      <AnimationProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </AnimationProvider>
    </Router>
  );
}

export default App;