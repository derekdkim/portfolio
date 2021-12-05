import React from "react";
import { Link } from "gatsby";
import { Button, Heading, Flex, Text, Image } from "@chakra-ui/react";

import PugImg from "../images/pug-nobles.jpg";

import Layout from "../components/layout/layout";

const NotFoundPage = () => {
  return (
    <Layout pageTitle="404 Not Found">
      <Flex direction="column" justify="center" align="center" mb="20">
        <Heading fontSize="4xl">
          You came to the wrong neighbourhood!
        </Heading>
        <Image src={PugImg} alt="Pug Nobles" my="8" w={{ md: "40rem" }} />
        <Text>This page doesn't exist.</Text>
      </Flex>
      <Flex justify="center">
        <Link to="/">
          <Button colorScheme="purple">Return to Home Page</Button>
        </Link>
      </Flex>
    </Layout>
  );
};

export default NotFoundPage;
