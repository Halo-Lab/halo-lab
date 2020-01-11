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

  return (<pre>{JSON.stringify(allWordpressPost, null, 4)}</pre>);
}

  




export default Posts
