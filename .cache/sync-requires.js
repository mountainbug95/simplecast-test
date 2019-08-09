const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---gatsby-theme-simplecast-src-templates-episode-js": hot(preferDefault(require("/Users/tannersmith/stackbit_themes/uniform/gatsby-theme-simplecast/gatsby-theme-simplecast/src/templates/episode.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/tannersmith/stackbit_themes/uniform/gatsby-theme-simplecast/site/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/tannersmith/stackbit_themes/uniform/gatsby-theme-simplecast/site/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/tannersmith/stackbit_themes/uniform/gatsby-theme-simplecast/site/src/pages/index.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("/Users/tannersmith/stackbit_themes/uniform/gatsby-theme-simplecast/site/src/pages/page-2.js")))
}

