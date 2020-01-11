import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Posts = ({ data }) => {
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

  console.log('111111111');
  console.log(allWordpressPost);

  return (<pre>{JSON.stringify(allWordpressPost, null, 4)}</pre>);
}

  




export default Posts
