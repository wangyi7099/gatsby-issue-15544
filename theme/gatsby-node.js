var path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  return createPage({
    path: '/',
    component: path.resolve(__dirname, 'template.js'),
    context: {
      id: '1'
    }
  });
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type MdxFrontmatter @infer {
      type: String
      title: String
      subtitle: String
      disabled: Boolean
      link: String
      important: Boolean
    }

    type Avatar {
      href: String
      text: String
      src: String
    }

    type MdxFields @infer {
      avatarList: [Avatar]
    }
  
    type Mdx implements Node @infer {
      frontmatter: MdxFrontmatter
      fields: MdxFields
    }

    type SitePage implements Node @infer {
      context: SitePageContext
    }

    type SitePageContext @dontInfer  {
      webConfig: Json
    }
    `;
  createTypes(typeDefs);
};
