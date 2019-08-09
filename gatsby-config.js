require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

siteMetadata = require('./data/site-metadata.json');

module.exports = {
  siteMetadata,
  plugins: [
    {
      resolve: '@vojtaholik/gatsby-theme-simplecast',
      options: {
        simplecastApiSecret: process.env.SIMPLECAST_API_SECRET,
        //podcastId: process.env.PODCAST_ID,
        markdownPath: 'content/episodes',
        episodeSlug: 'show',
      },
    },
    `gatsby-plugin-theme-ui`,
  ],
}
