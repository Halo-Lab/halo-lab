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
            date(formatString: "YYYY-MM-DDTHH:mm:ssZ")
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
              localFile {
                childImageSharp {
                  smallImg: fixed(width: 70, height: 70) {
                    src
                  }
                  mediumImg: fixed(width: 720, height: 540) {
                    src
                  }
                  largeImg: fixed(width: 640, height: 360) {
                    src
                  }
                }
              }
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

  const allPosts = result.data.allWordpressPost.edges.map(({ node }) => node);

  result.data.allWordpressPost.edges.forEach(({ node, previous, next }) => {
    createPage({
      path: `/blog/${node.slug}`,
      component: require.resolve(`./src/templates/BlogPost`),
      context: { data: node, allPosts, recent: { previous, next } },
    });
  });

  projects.forEach((node, index) => {
    let next =
      index === projects.length - 1 ? projects[0] : projects[index + 1];

    createPage({
      path: `/portfolio/${node.slug}`,
      component: require.resolve(`./src/templates/Project`),
      context: { data: node, next },
    });
  });
  const categories = ["agency", "case-studies", "news"];
  categories.forEach((category) => {
    createPage({
      path: `/blog/${category}`,
      component: require.resolve(`./src/pages/blog`),
    });
  });
};
