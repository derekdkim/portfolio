import React from "react"
import { Link } from 'gatsby';
import { Flex, Text, Heading, Button } from '@chakra-ui/react';

import Layout from "../components/layout/layout";

// Data
const subheading = 'I’m a self-taught software developer based in Winnipeg, Manitoba. I have a Master’s degree in Microbiology but I am pursuing my passion for creating cool apps.';

const IndexPage = () => {

  const NameText = (props) => {
    // "#27FF7E" in dark mode
    return (
      <Text
        d="inline"
        color="#2D65B9"
        { ...props }
      >
        { props.children }
      </Text>
    );
  }

  return (
    <Layout pageTitle="Derek Kim">
      <Flex direction="column">
        <Heading
          fontSize={{ base: "md", lg: "4xl" }}
          ml={{ base: "4", lg: "8" }}
        >
          Hi there,
        </Heading>
        <Heading
          fontSize={{ base: "xl", sm: "2xl", md: "6xl" }}
        >
          My name is <NameText>Derek Kim</NameText>
        </Heading>
        <Text
          my={{ base: "8", md: "12" }}
          fontSize="xl"
        >
          { subheading }
        </Text>
        <Flex
          justifyContent="center"
          my={{ base: "8", md: "12" }}
        >
          <Link to='/contact'>
            <Button>Let's make something cool together</Button>
          </Link>
        </Flex>
      </Flex>
    </Layout>
  )
}

export default IndexPage
