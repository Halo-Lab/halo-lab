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

  result.data.allWordpressPost.edges.forEach(({ node }) => {
    const itemsAgency = [];
    const itemsCaseStudies = [];
    const itemsNews = [];

    allPosts.forEach(item => {
      const categories = item.categories.map(item => item.slug);

      if (categories.indexOf("agency") !== -1) {
        itemsAgency.push(item);
      }

      if (categories.indexOf("case-studies") !== -1) {
        itemsCaseStudies.push(item);
      }

      if (categories.indexOf("news") !== -1) {
        itemsNews.push(item);
      }
    });

    const lengthOfArray = (i) => {
      if (i.length <= 9){
        return 1
      } else {
        return (i.length - 9) / 3 + 1
      }
    }
    const agencyPages = Array.from({
      length: Math.ceil(lengthOfArray(itemsAgency))}, (_, i) => i + 1);
    const caseStudiesPages = Array.from({
      length: Math.ceil(lengthOfArray(itemsCaseStudies))}, (_, i) => i + 1);
    const newsPages = Array.from({
      length: Math.ceil(lengthOfArray(itemsNews))}, (_, i) => i + 1);

    const categoriesPages = [
      { category: "agency", item: agencyPages },
      { category: "case-studies", item: caseStudiesPages },
      { category: "news", item: newsPages },
    ];

    categoriesPages.forEach((category) => {
      category.item.forEach((page) => {
        let pageUrl = page === 1? '': '/' + page;
        createPage({
          path: `/blog/${category.category}${pageUrl}`,
          component: require.resolve(`./src/pages/blog`),
          context: { page },
        });
      })
    });
  });
};
