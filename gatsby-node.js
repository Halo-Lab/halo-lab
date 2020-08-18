/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { version } = require('./package.json');

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  if (stage === 'build-javascript') {
    actions.setWebpackConfig({
      plugins: [
        new BundleAnalyzerPlugin({
          statsFilename: `../reports/stats_v${version}.json`,
          reportFilename: `../reports/report_v${version}.html`,
          openAnalyzer: false,
          analyzerMode: 'static',
          generateStatsFile: true,
          statsOptions: {
            source: false,
          },
        }),
      ],
    });
  }
};

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

  const allPosts = result.data.allWordpressPost.edges.map(({ node }) => node);

  result.data.allWordpressPost.edges.forEach(({ node, previous, next }) => {
    createPage({
      path: `/blog/${node.slug}`,
      component: require.resolve(`./src/templates/BlogPost`),
      context: { data: node, allPosts, recent: { previous, next } },
    });
  });
};
