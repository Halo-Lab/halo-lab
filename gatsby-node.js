/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allWordpressPost {
        edges {
          node {
            id
            slug
            title
            date(formatString: "MMM DD, YYYY")
            content
            categories {
              name
              id
              count
              slug
            }
            featured_media {
              source_url
            }
          }
        }
      }
    }
  `);

  result.data.allWordpressPost.edges.forEach(({ node }) => {
    createPage({
      path: `/blog/${node.slug}`,
      component: require.resolve(`./src/templates/blog-post.js`),
      context: { data: node },
    });
  });
};
