import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '@/components/Layout';

const NotFoundPage = () => {
  return (
    <Layout title="Huri DevBlog | 404">
      <div className="flex flex-col items-center mt-20">
        <Image
          src="/images/logo.png"
          width={100}
          height={100}
          className="bg-gray-800 rounded-2xl"
        />
        <h1 className="text-6xl my-5">Whoops!</h1>
        <h2 className="text-4xl text-gray-400 m-5">Huri DevBlog | 404</h2>
        <h3 className="text-2xl  text-gray-500">This page does not exist</h3>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
