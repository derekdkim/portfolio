module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Derek Kim",
  },
  plugins: [
    "gatsby-plugin-fontawesome-css",
    "gatsby-plugin-gatsby-cloud",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
  ],
  flags: {
    DEV_SSR: false
  }
};
