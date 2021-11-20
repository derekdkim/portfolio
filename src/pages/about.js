import React from "react";
import { Link } from "gatsby";
import {
  Flex,
  Text,
  Heading,
  Box,
  Button,
  Grid,
  Image,
  List,
  ListItem,
  useMediaQuery,
} from "@chakra-ui/react";

import Layout from "../components/layout/layout";
import ProfileImg from "../images/profile.jpg";

// Content Data
const paragraph0 =
  "What brings someone trained in Microbiology to the world of software development? To be frank, I thought I had everything figured out when I enrolled in grad school. One day, I started reading my brother’s intro Java textbook out of curiosity and I was introduced to a new world. I fell in love with the problem-solving nature and sheer versatility of programming. As a life-long nerd, the desire to build technologies that play an increasingly larger part of our lives kept growing inside me.";
const paragraph1 =
  "Thanks to the breathtaking amount of resources available online and helpful communities, I was able to learn from zero and dip my feet in open-source development, which cemented my passion for this craft. I still have a lot to learn as a self-taught developer but every new piece of technology I learn is an adventure I am excited to take part in. I’d love to be able to put my passion towards tackling real-world challenges.";

const AboutPage = () => {
  const [isLargerThan1024] = useMediaQuery("(min-width: 1024px)");

  const SkillContainer = (props) => {
    return (
      <Flex p="4" flexDirection="column" {...props}>
        {props.children}
      </Flex>
    );
  };
  return (
    <Layout pageTitle="About Me">
      <Heading fontSize="4xl" mb="8">
        My Story
      </Heading>
      <Box
        display={{ base: "flex", md: "grid" }}
        as={isLargerThan1024 ? Grid : Flex}
        flexDirection="column"
        templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
      >
        {/* Left Section */}
        <Flex justifyContent="center" alignItems="center" p="4">
          <Image src={ProfileImg} alt="Derek Kim" minW="220px" maxW="350px" />
        </Flex>
        {/* Right Section */}
        <Box>
          <Text fontSize="xl" padding="2">
            {paragraph0}
          </Text>
          <Text fontSize="xl" padding="2">
            {paragraph1}
          </Text>
        </Box>
      </Box>
      <Flex flexDirection="column" my="8">
        <Heading>My Skills</Heading>
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          justifyContent="space-around"
          my="8"
        >
          {/* Front End */}
          <SkillContainer flexDirection="column">
            <Heading>Languages</Heading>
            <List mt="2">
              <ListItem>JavaScript</ListItem>
              <ListItem>TypeScript</ListItem>
              <ListItem>Python</ListItem>
            </List>
          </SkillContainer>
          {/* Front End */}
          <SkillContainer flexDirection="column">
            <Heading>Front End</Heading>
            <List mt="2">
              <ListItem>HTML</ListItem>
              <ListItem>CSS</ListItem>
              <ListItem>React.js</ListItem>
              <ListItem>Tailwind.css</ListItem>
              <ListItem>Gatsby</ListItem>
              <ListItem>Chakra UI</ListItem>
              <ListItem>Material UI</ListItem>
            </List>
          </SkillContainer>
          {/* Back End */}
          <SkillContainer flexDirection="column">
            <Heading>Back End</Heading>
            <List mt="2">
              <ListItem>Node.js</ListItem>
              <ListItem>Express</ListItem>
              <ListItem>MongoDB</ListItem>
              <ListItem>PostgreSQL</ListItem>
              <ListItem>Google Firebase</ListItem>
              <ListItem>Jest</ListItem>
            </List>
          </SkillContainer>
          {/* Other */}
          <SkillContainer flexDirection="column">
            <Heading>Other</Heading>
            <List mt="2">
              <ListItem>Git</ListItem>
              <ListItem>Figma</ListItem>
              <ListItem>Adobe XD</ListItem>
              <ListItem>Heroku</ListItem>
              <ListItem>Netlify</ListItem>
              <ListItem>Linux (Ubuntu)</ListItem>
            </List>
          </SkillContainer>
        </Flex>
      </Flex>
      <Flex justifyContent="center" alignItems="center" my="8">
        <Link to="/contact">
          <Button colorScheme="purple" size="lg">
            Get in touch
          </Button>
        </Link>
      </Flex>
    </Layout>
  );
};

export default AboutPage;
