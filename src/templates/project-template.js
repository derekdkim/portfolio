import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@chakra-ui/react";
import {
  Heading,
  Flex,
  Grid,
  Text,
  Icon,
  Button,
  List,
  ListItem,
} from "@chakra-ui/react";

import Layout from "../components/layout/layout";

const ProjectTemplate = ({ pageContext: { project } }) => {
  return (
    <Layout>
      <Flex flexDirection="column">
        <Heading>{project.title}</Heading>
        <Flex
          flexDirection="row"
          my="8"
          fontSize={{ base: "md", md: "xl" }}
          alignItems="center"
        >
          <Icon as={FontAwesomeIcon} icon={["fab", "github"]} fontSize="2xl" />
          <Text d="inline" mx="2">
            View Source Code:
          </Text>
          {
            /* Source Code Links */
            project.components.map((component, index) => (
              <Link href={component.url} key={index}>
                <Button mx="2" colorScheme="yellow">
                  {component.name}
                </Button>
              </Link>
            ))
          }
        </Flex>
        <Flex fontSize="xl" flexDirection="inherit">
          {
            /* Project Description */
            project.desc.map((paragraph, index) => (
              <Text mb="4" key={index}>
                {paragraph}
              </Text>
            ))
          }
        </Flex>
        <Flex my="8" justifyContent="center">
          <Link href={project.url}>
            <Button size="lg" colorScheme="purple">
              Try it out
            </Button>
          </Link>
        </Flex>
        <Heading>Technologies Used</Heading>
        <Grid
          templateColumns={`repeat(${project.components.length}, 1fr)`}
          my="8"
        >
          {
            /* Tech stack for each component of the project */
            project.components.map((component, index) => (
              <Flex key={index + Math.random()} flexDirection="column">
                {
                  /* Add section header if more than one component */
                  project.components.length > 1 && (
                    <Heading fontSize={{ base: "lg", md: "xl" }}>
                      {component.name}
                    </Heading>
                  )
                }
                <List fontSize={{ base: "sm", md: "md" }}>
                  {
                    /* List of tech used for the component */
                    component.tech.map((tech, index) => (
                      <ListItem key={index}>{tech}</ListItem>
                    ))
                  }
                </List>
              </Flex>
            ))
          }
        </Grid>
      </Flex>
    </Layout>
  );
};

export default ProjectTemplate;
