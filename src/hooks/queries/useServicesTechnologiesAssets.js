import { useStaticQuery, graphql } from 'gatsby';

const useServicesTechnologiesAssets = () => {
  const data = useStaticQuery(graphql`
    query {
      angular: file(
        relativePath: { eq: "sections/services-technologies/angular.svg" }
      ) {
        publicURL
      }
      cordova: file(
        relativePath: { eq: "sections/services-technologies/cordova.svg" }
      ) {
        publicURL
      }
      css3: file(
        relativePath: { eq: "sections/services-technologies/css3.svg" }
      ) {
        publicURL
      }
      elasticsearch: file(
        relativePath: { eq: "sections/services-technologies/elasticsearch.svg" }
      ) {
        publicURL
      }
      express: file(
        relativePath: { eq: "sections/services-technologies/express.svg" }
      ) {
        publicURL
      }
      html5: file(
        relativePath: { eq: "sections/services-technologies/html5.svg" }
      ) {
        publicURL
      }
      ionic: file(
        relativePath: { eq: "sections/services-technologies/ionic.svg" }
      ) {
        publicURL
      }
      javascript: file(
        relativePath: { eq: "sections/services-technologies/javascript.svg" }
      ) {
        publicURL
      }
      keystone: file(
        relativePath: { eq: "sections/services-technologies/keystone.svg" }
      ) {
        publicURL
      }
      mongodb: file(
        relativePath: { eq: "sections/services-technologies/mongodb.svg" }
      ) {
        publicURL
      }
      mysql: file(
        relativePath: { eq: "sections/services-technologies/mysql.svg" }
      ) {
        publicURL
      }
      nodejs: file(
        relativePath: { eq: "sections/services-technologies/nodejs.svg" }
      ) {
        publicURL
      }
      php: file(
        relativePath: { eq: "sections/services-technologies/php.svg" }
      ) {
        publicURL
      }
      postgresql: file(
        relativePath: { eq: "sections/services-technologies/postgresql.svg" }
      ) {
        publicURL
      }
      pwa: file(
        relativePath: { eq: "sections/services-technologies/pwa.svg" }
      ) {
        publicURL
      }
      reactNative: file(
        relativePath: { eq: "sections/services-technologies/react-native.svg" }
      ) {
        publicURL
      }
      react: file(
        relativePath: { eq: "sections/services-technologies/react.svg" }
      ) {
        publicURL
      }
      redis: file(
        relativePath: { eq: "sections/services-technologies/redis.svg" }
      ) {
        publicURL
      }
      typescript: file(
        relativePath: { eq: "sections/services-technologies/typescript.svg" }
      ) {
        publicURL
      }
      vue: file(
        relativePath: { eq: "sections/services-technologies/vue.svg" }
      ) {
        publicURL
      }
      wordpress: file(
        relativePath: { eq: "sections/services-technologies/wordpress.svg" }
      ) {
        publicURL
      }
    }
  `);

  return data;
};

export default useServicesTechnologiesAssets;
