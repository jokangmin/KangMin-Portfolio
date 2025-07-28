import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-5 right-5 z-50 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"
    >
      <FaArrowUp size={40} />
    </button>
  );
};

export default ScrollToTopButton;