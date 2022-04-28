import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Search from './Search';

const Layout = ({ title, description, keywords, children }) => {
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <title>{title}</title>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <Header />
      <Search />
      <main className="container mx-auto my-7">{children}</main>
      <footer className="text-gray-400 py-3 text-center">
        &copy; Copyright {new Date().getFullYear()}
      </footer>
    </div>
  );
};

Layout.defaultProps = {
  title: 'Huri DevBlog',
  keywords: 'Web development, coding, programming',
  description: 'HTML, CSS, JavaScript, NextJS'
};

export default Layout;
