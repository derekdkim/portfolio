import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { format } from "date-fns";
import { Link } from "gatsby";

const BlogCard = ({ data }) => {
  return (
    <Flex direction="column" my="2rem">
      <Box>
        <Text color="#B469FF">{format(new Date(data.frontmatter.date), 'MMMM dd, yyyy')}</Text>
        <Heading>{data.frontmatter.title}</Heading>
      </Box>
      <Text my='1rem'>{data.excerpt}</Text>
      <Link to={data.fields.slug}>
        <Text>Read more</Text>
      </Link>
    </Flex>
  );
};

export default BlogCard;
