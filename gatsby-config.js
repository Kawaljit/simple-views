module.exports = {
  siteMetadata: {
    title: `Simple react views`,
    description: `Simple react views`,
  },
  plugins: [
    `gatsby-plugin-glamor`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
  ]
}