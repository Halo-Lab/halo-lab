import React from 'react';

import Providers from '@components/Providers';
import Layout from '@components/Layout';
import Head from '@components/Head';
import BackgroundStars from '@components/BackgroundStars';
import BlogPage from '@scenes/BlogPage';
import PropTypes from "prop-types";

const Blog = ({ pageContext }) => {
  const title = 'Blog | Web Design and Development Services | Halo Lab';
  const description = `If you would like to find some useful articles about digital products - welcome to our blog page. Here we tell you about design and development, we share our case studies with you, and we talk about logos and branding.`;
  const { page } = pageContext;
  return (
    <Providers>
      <BackgroundStars />
      <Layout>
        <Head title={title} description={description}></Head>
        <BlogPage page={page}/>
      </Layout>
    </Providers>
  );
};
Blog.propTypes = {
  pageContext: PropTypes.object,
};
export default Blog;
