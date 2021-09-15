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
  ],
  flags: {
    DEV_SSR: false
  }
};
