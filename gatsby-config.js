require(`dotenv`).config()

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // You can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-minimal-blog/gatsby-config.js
    siteTitle: `Son en Tránsito`,
    siteTitleAlt: `Son en Tránsito - SonT`,
    siteHeadline: `Son en Tránsito - SonT de sdCarr`,
    siteUrl: `https://sonentransito.netlify.app/blog`,
    siteDescription: `Blog dedicado a converxencia da música educación tecnoloxía `,
    siteLanguage: `gal`,
    siteImage: `/banner.jpg`,
    author: `@lekoarts_de`,
  },
  plugins: [

    `gatsby-plugin-react-helmet`,
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `Twitter`,
            url: `https://twitter.com/sonentransito`,
          },
          {
            name:`Facebook`,
            url: `https://www.facebook.com/Son-en-Transito-107220208604565`
          
          }

          ,
          {
            name: `Homepage`,
            url: `https://sonentransito.netlify.app/`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.gstatic.com`],
        interval: 300,
        timeout: 30000,
        // If you plan on changing the font you'll also need to adjust the Theme UI config to edit the CSS
        // See: https://github.com/LekoArts/gatsby-themes/tree/main/examples/minimal-blog#changing-your-fonts
        web: [
          {
            name: `IBM Plex Sans`,
            file: `https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&display=swap`,
          },
        ],
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `minimal-blog - @lekoarts/gatsby-theme-minimal-blog`,
        short_name: `minimal-blog`,
        description: `Typography driven, feature-rich blogging theme with minimal aesthetics. Includes tags/categories support and extensive features for code blocks such as live preview, line numbers, and code highlighting.`,
        start_url: `/`,
        background_color: `#fff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title: siteTitle
                description: siteDescription
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allPost } }) =>
              allPost.nodes.map((post) => {
                const url = site.siteMetadata.siteUrl + post.slug
                const content = `<p>${post.excerpt}</p><div style="margin-top: 50px; font-style: italic;"><strong><a href="${url}">Keep reading</a>.</strong></div><br /> <br />`

                return {
                  title: post.title,
                  date: post.date,
                  excerpt: post.excerpt,
                  url,
                  guid: url,
                  custom_elements: [{ "content:encoded": content }],
                }
              }),
            query: `
              {
                allPost(sort: { fields: date, order: DESC }) {
                  nodes {
                    title
                    date(formatString: "MMMM D, YYYY")
                    excerpt
                    slug
                  }
                }
              }
            `,
            output: `rss.xml`,
            title: `Minimal Blog - @lekoarts/gatsby-theme-minimal-blog`,
          },
        ],
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
    
    {
      resolve: "gatsby-plugin-social-cards",
      options: {
        // ommit to skip
        authorImage: "./static/img/coffee-art.jpg",
        // image to use when no cover in frontmatter
        backgroundImage: "./static/img/android-chrome-512x512.png",
        // author to use when no auth in frontmatter
        defaultAuthor: "Andri Óskarsson",
        // card design
        design: "default", // 'default' or 'card'
      },
    },
    
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-transformer-remark`,
        {
          resolve: `gatsby-source-filesystem`,
          options: {
            path: `${__dirname}/content/posts`,
          },

        },
        {
          resolve: `gatsby-plugin-react-social-cards`,
          options: {
              query: `
                  {
                      allMarkdownRemark {
                          nodes {
                              fields {
                                  slug
                              }
                              frontmatter {
                                  title
                                  description
                              }
                          }
                      }
                  }
              `,
              queryToPages: (result) => 
                  result.data.allMarkdownRemark.nodes.map(node => {
                      const slugWithoutSlashes = node.fields.slug.node.slug.replace(/\//g, '');
                      return {
                          slug: `/${slugWithoutSlashes}`,
                          pageContext: {
                              title: node.frontmatter.title,
                              coverImage: node.frontmatter.coverImage,
                          },
                      };
                  }),
              component: require.resolve('./src/components/social-card.js'),
              cardLimit: 0, // Useful for debugging.
          },
      },
    
  ].filter(Boolean),
}
