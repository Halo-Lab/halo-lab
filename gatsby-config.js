require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Halo-Lab`,
    description: `Experts from all your network providers integrated into one powerful platform.`,
    author: `@halolabteam`,
    email: `mail@halo-lab.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-dribbble`,
      options: {
        access_token: process.env.DRIBBBLE_TOKEN,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `fonts`,
        path: `${__dirname}/src/fonts/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Halo-Lab Blog`,
        short_name: `Halo-Lab`,
        start_url: `/`,
        background_color: `#02021e`,
        theme_color: `#02021e`,
        display: `standalone`,
        icon: `static/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [
          `/`,
          `/portfolio/`,
          `/services/`,
          `/blog/`,
          // `/blog/*`,
          `/contacts/`,
          `/thanks/`,
          `/404/`,
        ],
      },
    },
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: process.env.WP_API_BASE_URL,
        protocol: process.env.WP_API_PROTOCOL,
        useACF: false,
        auth: {
          jwt_user: process.env.JWT_USER,
          jwt_pass: process.env.JWT_PASSWORD,
          jwt_base_path: '/jwt-auth/v1/token',
        },
        includedRoutes: [
          '**/categories',
          '**/posts',
          '**/pages',
          '**/media',
          '**/taxonomies',
        ],
      },
    },
    // {
    //   resolve: `gatsby-plugin-gtag`,
    //   options: {
    //     trackingId: process.env.GTAG_TRACKING_ID,
    //     head: true,
    //     anonymize: false,
    //   },
    // },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [process.env.GTAG_TRACKING_ID],
        gtagConfig: {
          // optimize_id: 'OPT_CONTAINER_ID',
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: false,
          respectDNT: true,
          // exclude: ['/preview/**', '/do-not-track/me/too/'],
        },
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@src': 'src',
          '@components': 'src/components',
          '@pages': 'src/pages',
          '@scenes': 'src/scenes',
          '@hooks': 'src/hooks',
          '@contexts': 'src/contexts',
          '@services': 'src/services',
          '@helpers': 'src/helpers',
          '@styles': 'src/styles',
          '@images': 'src/images',
        },
        extensions: ['js', 'sass', 'scss'],
      },
    },
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        id: process.env.HOTJAR_ID,
        sv: process.env.HOTJAR_SNIPPET_VERSION,
      },
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
  ],
};
