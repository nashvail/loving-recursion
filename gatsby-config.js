const autoprefixer = require('autoprefixer')

module.exports = {
  siteMetadata: {
    title: `Loving Recursion`,
    description: `A book about learning to love recursion`,
    author: `@nashvail`,
    url: 'https://loving-recursion.co',
    image:'og.png',
    keywords: [
      "nash",
      "vail",
      "tutorial",
      "code",
      "javascript",
      "recursion",
      "algorithms",
      "algorithm",
      "recursive",
      "web",
      "hanoi",
      "graphical recursion",
      "sierpinski",
      "koch",
      "snowflake",
      "mondrian",
      "art",
      "understanding"
    ],
    social: {
      twitter: "@nashvail",
    }
  },
  plugins: [
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `chapters`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          posts: require.resolve("./src/templates/chapters.js"),
          default: require.resolve("./src/templates/chapters.js"),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 900,
              disableBgImageOnAlpha: true,
              linkImagesToOriginal: false,
              showCaptions: true
            }
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              showLineNumbers: true,
              noInlineHighlight: false
            }
          },
          {
            resolve: `gatsby-remark-embedder`
          },
          {
            resolve: `gatsby-remark-katex`,
            options: {
              strict: 'ignore'
            }
          }
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          autoprefixer()
        ],
      },
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
