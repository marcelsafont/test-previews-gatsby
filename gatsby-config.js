/**
 * @type {import('gatsby').GatsbyConfig}
 */
require('dotenv').config()
module.exports = {
  siteMetadata: {
    title: `test-previews`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATOCMS_TOKEN_API,
      }
    }

  ],
}
