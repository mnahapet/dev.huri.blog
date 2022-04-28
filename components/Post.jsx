import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CategoryLabel from './CategoryLabel';

const Post = ({ post: { frontmatter, slug }, compact }) => {
  // console.log(slug);
  return (
    <Link
      href={`/blog/${slug}`}
      className="w-full px-10 py-6 bg-white rounded-lg shadow-md mt-6">
      <a className="block w-full px-10 py-6 bg-white rounded-lg shadow-md mt-6 transform transition-transform duration-300 ease-in-out hover:-translate-y-1">
        {!compact && (
          <Image
            src={frontmatter.cover_image}
            alt={frontmatter.title}
            height={420}
            width={600}
            className="mb-4 rounded"
          />
        )}
        <div className="flex justify-between items-center">
          <span className="font-light text-gray-600">{frontmatter.date}</span>
          <CategoryLabel>{frontmatter.category}</CategoryLabel>
        </div>
        <div className="mt-2">
          {/* <Link href={`/blog/${slug}`}>
          <a className="text-2xl text-gray-700 font-bold hover:underline">
            {frontmatter.title}
          </a>
        </Link> */}
          <h3 className="text-2xl text-gray-700 font-bold">
            {frontmatter.title}
          </h3>
          <p className="m-2 text-gray-600">{frontmatter.excerpt}</p>
        </div>

        {/* <div className="flex justify-between items-center mt-6">
        <Link href={`/blog/${slug}`}>
          <a className="text-gray-900 hover:text-blue-600">Read More</a>
        </Link>
      </div> */}
        {!compact && (
          <div className="flex items-center">
            <img
              src={frontmatter.author_image}
              alt="author image"
              className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
            />
            <h3 className="text-gray-700 font-bold hidden sm:block">
              {frontmatter.author}
            </h3>
          </div>
        )}
      </a>
    </Link>
  );
};

export default Post;
