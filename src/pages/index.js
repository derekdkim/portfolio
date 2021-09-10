import React from "react"
import { Link } from 'gatsby';
import { Flex, Text, Heading } from '@chakra-ui/react';

import Layout from "../components/layout";

// Data
const subheading = 'I’m a self-taught software developer based in Winnipeg, Manitoba. I have a Master’s degree in Microbiology but I am pursuing my passion for creating cool apps.';

const IndexPage = () => {
  return (
    <Layout pageTitle="Derek Kim">
      <Flex justifyContent="center" alignItems="center" direction="column" mx="40">
        <h2>Hi there,</h2>
        <h1>My name is <span>Derek Kim</span></h1>
        <p>{ subheading }</p>
        <Link to='/contact'>
          <button>Let's make something cool together</button>
        </Link>
      </Flex>
    </Layout>
  )
}

export default IndexPage
