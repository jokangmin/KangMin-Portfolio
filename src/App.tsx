import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import HomePage from './pages/HomePage';
import { AnimationProvider } from './context/AnimationContext.tsx';

function App() {
  return (
    <Router>
      <HelmetProvider>
        <AnimationProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </AnimationProvider>
      </HelmetProvider>
    </Router>
  );
}

export default App;