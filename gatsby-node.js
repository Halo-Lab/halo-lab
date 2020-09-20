/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const projects = require('./projects');

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
            excerpt
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
          next {
            slug
            title
            date(formatString: "MMM DD, YYYY")
            featured_media {
              source_url
            }
            categories {
              name
              id
              count
              slug
            }
          }
          previous {
            slug
            title
            date(formatString: "MMM DD, YYYY")
            featured_media {
              source_url
            }
            categories {
              name
              id
              count
              slug
            }
          }
        }
      }
    }
  `);

  const RECOMMENDED_POSTS_LIMIT = 4;
  let recommendedPosts = result.data.allWordpressPost.edges
    .map(({ node }) => node)
    .reverse()
    .slice(0, RECOMMENDED_POSTS_LIMIT);

  result.data.allWordpressPost.edges.forEach(({ node, previous, next }) => {
    createPage({
      path: `/blog/${node.slug}`,
      component: require.resolve(`./src/templates/BlogPost`),
      context: { data: node, recommendedPosts, recent: { previous, next } },
    });
  });

  projects.forEach((node, index) => {
    let next = index == projects.length - 1 ? projects[0] : projects[index + 1];

    createPage({
      path: `/portfolio/${node.slug}`,
      component: require.resolve(`./src/templates/Project`),
      context: { data: node, next },
    });
  });
};
