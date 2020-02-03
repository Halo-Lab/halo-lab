import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { useWordpressPosts } from '@hooks/queries';

const Posts = () => {
  const { allWordpressPost } = useStaticQuery(
    graphql`
      {
        allWordpressPost {
          edges {
            node {
              id
              title
              content
              path
            }
          }
        }
      }
    `
  );
  const items = useWordpressPosts();
  console.log(items);

  return <pre>{JSON.stringify(allWordpressPost, null, 4)}</pre>;
};
export default Posts;
