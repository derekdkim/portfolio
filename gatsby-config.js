module.exports = {
  siteMetadata: {
    siteUrl: "https://derekdkim.gtsb.io",
    title: "Derek Kim",
  },
  plugins: [
    "gatsby-plugin-fontawesome-css",
    "gatsby-plugin-gatsby-cloud",
    {
      resolve: "@chakra-ui/gatsby-plugin",
      options: {
        /**
         * @property {boolean} [resetCSS=true]
         * if false, this plugin will not use `<CSSReset />
         */
        resetCSS: true,
        /**
         * @property {boolean} [isUsingColorMode=true]
         * if false, this plugin will not use <ColorModeProvider />
         */
        isUsingColorMode: true,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/images/`,
        name: "images"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/blog/`,
        name: "blog"
      }
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [`.md`, `.mdx`],
      },
    },
  ],
  flags: {
    DEV_SSR: false
  }
};
