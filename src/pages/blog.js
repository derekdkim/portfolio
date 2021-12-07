import React from "react";
import { Heading, Flex } from "@chakra-ui/react";
import { graphql } from "gatsby";

import Layout from "../components/layout/layout";
import BlogCard from "../components/blog/BlogCard";

const Blog = ({ data }) => {
  console.log(data);
  return (
    <Layout pageTitle="Blogs">
      <Heading>Blog</Heading>
      <Flex direction="column">
        {data.blog.posts &&
          data.blog.posts.map((item, index) => (
            <BlogCard data={item} key={index} />
          ))}
      </Flex>
    </Layout>
  );
};

export default Blog;

export const pageQuery = graphql`
  query MyQuery {
    blog: allMarkdownRemark {
      posts: nodes {
        fields {
            slug
        }
        frontmatter {
          date
          title
          author
        }
        excerpt(pruneLength: 300)
        id
      }
    }
  }
`;
