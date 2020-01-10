import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Helmet from "react-helmet";

const Head = ({ children }) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `);
  console.log('Warning "componentWillMount has been renamed" maked by Head Component. Helmet issue.');

  const descriptionDefault = site.siteMetadata.description;
  const titleDefault = site.siteMetadata.title;
  // const authorDefault = site.siteMetadata.author;

  return (
    <Helmet>
      <html lang="en"/>
      <meta charSet="utf-8"/>

      <meta name="description" content={descriptionDefault}/>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
      <meta name="google-site-verification" content="KaWJr5sGtZ__QgG_cgjeVJ-BtUEvLAv7XFF1xXUb7yA" />
      <link rel="profile" href="https://gmpg.org/xfn/11"/>
      
      {/* fonts --> */}
      <link rel="stylesheet" href="https://use.typekit.net/dbe7btx.css"/>
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet"/>
      {/* <-- fonts */}

      <title>{titleDefault}</title>

      {children}
    </Helmet>
  );
};

export default Head;
