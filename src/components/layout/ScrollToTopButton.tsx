import React from 'react';
import home from '../../assets/pen6-2.webp';

const ScrollToTopButton: React.FC = React.memo(() => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-5 right-5 z-40 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"
    >
      <h2>UP ⬆️</h2>
      <img
        src={home}
        alt="Pen home doodle"
        className='w-14 h-14 z-50'
      />
    </button>
  );
});

export default ScrollToTopButton;