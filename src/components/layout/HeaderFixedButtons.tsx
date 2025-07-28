import { FaGithub } from 'react-icons/fa';
import { SiVelog } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';
import React from 'react';

const HeaderFixedButtons: React.FC = React.memo(() => {
  return (
    <div className="fixed top-5 right-5 z-50 flex gap-3">
      <a
        href="https://github.com/jokangmin"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"
      >
        <FaGithub size={30} />
      </a>
      <a
        href="https://velog.io/@jomin357/posts"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"
      >
        <SiVelog size={30} />
      </a>
      <a
        href="mailto:jomin5151@gmail.com"
        className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"
      >
        <MdEmail size={30} />
      </a>
    </div>
  );
});

export default HeaderFixedButtons;