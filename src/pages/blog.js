import React from 'react';

import Head from '@components/Head';

import BlogPage from '@scenes/BlogPage';

const Blog = () => {
  const title = 'Blog - Halo Lab';
  const description = `If you would like to find some useful articles about digital products - welcome to our blog page. Here we tell you about design and development, we share our case studies with you, and we talk about logos and branding.`;

  return (
    <>
      <Head title={title} description={description}></Head>
      <BlogPage />
    </>
  );
};

export default Blog;
