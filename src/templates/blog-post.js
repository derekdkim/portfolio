import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Box,
  Flex,
  Heading,
  Text,
  Icon,
  Button,
  UnorderedList,
  ListItem,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";
import CodeBlock from "../components/CodeBlock";

import Layout from "../components/layout/layout";

const componentLegend = {
  h2: (props) => <Heading mt="2rem" mb="1rem" fontSize="2xl" as="h2" {...props} />,
  h3: (props) => <Heading mt="2rem" mb="1rem" fontSize="xl" as="h3" {...props} />,
  p: (props) => <Text my="1rem" {...props} />,
  pre: ({ children }) => (
    <CodeBlock
      language={children.props.className.split("-")[1]}
      text={children.props.children}
    />
  ),
  ul: (props) => <UnorderedList {...props} />,
  li: (props) => <ListItem {...props} />,
  a: (props) => <ChakraLink color='teal.500' {...props} isExternal />,
};

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
          <Text my="1rem">{post.frontmatter.date}</Text>
          <Box my="2rem">
            <MDXProvider components={componentLegend}>
              <MDXRenderer frontmatter={post.frontmatter}>
                {post.body}
              </MDXRenderer>
            </MDXProvider>
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
