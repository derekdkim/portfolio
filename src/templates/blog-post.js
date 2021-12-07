import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Flex, Heading, Text, Icon, Button } from "@chakra-ui/react";
import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Layout from "../components/layout/layout";

const BlogPost = ({ data }) => {
  const post = data.mdx;

  return (
    <Layout>
      <Flex direction="column">
        <Flex alignItems="center" justifyItems="center" my="1rem">
          <Link to="/blog">
            <Button
              aria-label="Return to the blog list"
              leftIcon={<Icon as={FontAwesomeIcon} icon="arrow-left" />}
              variant="ghost"
            >
              Return to Blog
            </Button>
          </Link>
        </Flex>
        <Flex direction="column">
          <Heading>{post.frontmatter.title}</Heading>
          <Text>{post.frontmatter.date}</Text>
          <Box my="2rem">
            <MDXRenderer>{post.body}</MDXRenderer>
          </Box>
        </Flex>
      </Flex>
    </Layout>
  );
};

export default BlogPost;

export const query = graphql`
  query BlogQuery($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        date(fromNow: true)
        author
      }
    }
  }
`;
