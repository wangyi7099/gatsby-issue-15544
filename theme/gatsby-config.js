var path = require('path');

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.md', '.mdx', '.MD']
      }
    },

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'docs',
        path: path.resolve('docs')
      }
    }
  ]
};
