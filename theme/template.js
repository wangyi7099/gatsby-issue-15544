import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

export default class MyPageLayout extends React.Component {
  render() {
    debugger;
    return <MDXRenderer>{this.props.data.mdx.body}</MDXRenderer>;
  }
}

export const pageQuery = graphql`
  query MDXQuery($id: String!) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        subtitle
        link
        important
        disabled
      }
    }
  }
`;
