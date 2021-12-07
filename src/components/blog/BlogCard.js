import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { Link } from "gatsby";

const BlogCard = ({ data }) => {
  return (
    <Flex direction="column">
      <Box>
        <Text>{data.frontmatter.date}</Text>
        <Heading>{data.frontmatter.title}</Heading>
      </Box>
      <Text>{data.excerpt}</Text>
      <Link to={data.fields.slug}>
        <Text>Read more</Text>
      </Link>
    </Flex>
  );
};

export default BlogCard;
