import React from 'react';
import Link from 'next/link';

const CategoryLabel = ({ children }) => {
  const colorKey = {
    JavaScript: 'yellow',
    CSS: 'blue',
    Python: 'green',
    PHP: 'purple',
    Ruby: 'red'
  };
  return (
    <div
      className={`px-2 py-1 bg-${colorKey[children]}-600 text-gray-100 font-bold rounded transform transition-transform duration-300 ease-in-out hover:-translate-y-0.5`}>
      <Link href={`/blog/category/${children.toLowerCase()}`}>
        <object>{children}</object>
      </Link>
    </div>
  );
};

export default CategoryLabel;
