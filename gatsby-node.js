const path = require("path");
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: `slug`,
      value: `/blog${slug}`,
    });
  }
};

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const Template = path.resolve(`src/templates/blogtemplate.js`);

  return graphql(`
    {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              toArabic
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        slug: node.fields.slug,
        component: Template,
        context: {
          slug: node.fields.slug,
          toArabic: node.frontmatter.toArabic,
        }, // additional data can be passed via context
      });
    });
  });
};
