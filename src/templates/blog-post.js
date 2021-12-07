import React from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";
import { graphql } from "gatsby";

import Layout from "../components/layout/layout";

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;

  return (
    <Layout>
      <Flex direction="column">
        <Heading>{post.frontmatter.title}</Heading>
        <Text>{post.frontmatter.date}</Text>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Flex>
    </Layout>
  );
};

export default BlogPost;

export const query = graphql`
    query BlogQuery($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug }}) {
            html
            frontmatter {
                title
                date(fromNow: true)
                author
            }
        }
    }
`
