import React from "react";
import { Link as GatsbyLink } from "gatsby";
import { Flex, Text, Heading, Button } from "@chakra-ui/react";

import Layout from "../components/layout/layout";

// Data
const subheading =
  "I’m a self-taught web developer based in Winnipeg, Manitoba. I have a Master’s degree in Microbiology but it turns out I prefer handling bugs in the codebase.";

const IndexPage = () => {
  const NameText = (props) => {
    return (
      <Text d="inline" color="#2D65B9" {...props}>
        {props.children}
      </Text>
    );
  };

  return (
    <Layout pageTitle="Derek Kim">
      <Flex direction="column" justifyContent="center" alignItems="center">
        <Flex flexDirection="column">
          <Heading
            fontSize={{ base: "xl", lg: "4xl" }}
            ml={{ base: "4", lg: "8" }}
          >
            Hi there,
          </Heading>
          <Heading fontSize={{ base: "4xl", sm: "4xl", md: "6xl" }}>
            My name is <NameText>Derek Kim</NameText>
          </Heading>
          <Text my={{ base: "8", md: "12" }} fontSize="xl">
            {subheading}
          </Text>
          <Flex
            justifyContent="center"
            my={{ base: "8", md: "12" }}
            mx={{ base: "4" }}
          >
            <GatsbyLink to="/contact">
              <Button colorScheme="purple" size="lg" variant="solid">
                Let's work together!
              </Button>
            </GatsbyLink>
          </Flex>
        </Flex>
      </Flex>
    </Layout>
  );
};

export default IndexPage;
