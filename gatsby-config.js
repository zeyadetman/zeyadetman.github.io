module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: `Zeyad Etman`,
    description: `Zeyad Etman's Space on the internet.`,
    author: `@zeyadetman`,
    owner: "zeyadetman"
  },
  plugins: [
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout`)
      }
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `static/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `zeyadetman`,
        short_name: `zeyadetman`,
        start_url: `/`,
        background_color: `#fdbd12`,
        theme_color: `#fdbd12`,
        display: `minimal-ui`,
        icon: `static/images/logo.png` // This path is relative to the root of the site.
      }
    },
    "gatsby-plugin-offline",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/posts`,
        name: "markdown-pages"
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              commonmark: false,
              footnotes: false,
              pedantic: false,
              inlineCodeMarker: null,
              aliases: { js: "javascript" },
              showLineNumbers: false,
              noInlineHighlight: false
            }
          }
        ]
      }
    }

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ]
};
