module.exports = {
  siteMetadata: {
    title: `Akinsola`,
    description: `Akinsola Lawanson is a software developer and artist based in London.`,
    author: `Akinsola`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `pfpnthfr4goh`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken:'ATFHe3A7svI01UHejlH5D563hSNQIaSC5LaiDI2FVHs',
        // downloadLocal: true,
      },
    },
    {
      resolve: `gatsby-remark-images-contentful`,
      options: {
        // It's important to specify the maxWidth (in pixels) of
        // the content container as this plugin uses this as the
        // base for generating different widths of each image.
        maxWidth: 590,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-responsive-iframe`],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Akinsola Lawanson`,
        short_name: `akinsola`,
        start_url: `/`,
        background_color: `rgb(54,54,82)`,
        theme_color: `rgb(54,54,82)`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
        {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Lora\:300,400,400i,700` 
        ],
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
