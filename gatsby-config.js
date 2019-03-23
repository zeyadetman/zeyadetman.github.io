module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: `Zeyad Etman`,
    description: `Zeyad Etman's Space on the internet.`,
    author: `@zeyadetman`,
    owner: "zeyadetman"
  },
  plugins: [
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
        icon: `static/images/logo.png`, // This path is relative to the root of the site.
        icons: [
          {
            src: "static/images/logo.png",
            sizes: "48x48",
            type: "image/png"
          },
          {
            src: "static/images/logo.png",
            sizes: "72x72",
            type: "image/png"
          },
          {
            src: "static/images/logo.png",
            sizes: "96x96",
            type: "image/png"
          },
          {
            src: "static/images/logo.png",
            sizes: "144x144",
            type: "image/png"
          },
          {
            src: "static/images/logo.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "static/images/logo.png",
            sizes: "256x256",
            type: "image/png"
          },
          {
            src: "static/images/logo.png",
            sizes: "384x384",
            type: "image/png"
          },
          {
            src: "static/images/logo.png",
            sizes: "512x512",
            type: "image/png"
          }
        ]
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
              inlineCodeMarker: null,
              aliases: { js: "javascript" },
              showLineNumbers: true,
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
