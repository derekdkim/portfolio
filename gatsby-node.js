const { projectData } = require('./content/projects');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = ({ actions }) => {
  const { createPage } = actions;
  console.log(projectData);

  projectData.forEach(project => {
    createPage({
      path: `/${project.path}`,
      component: require.resolve(`./src/templates/project-template.js`),
      context: { project },
    })
  })
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'Mdx') {
    const slug = createFilePath({ node, getNode, basePath: `pages` });

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  result.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: require.resolve(`./src/templates/blog-post.js`),
      context: {
        slug: node.fields.slug,
      }
    });
  });
}