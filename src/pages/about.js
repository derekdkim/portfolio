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
const CONTENT = [
  "In 2017, my eyes opened to new possibilities. Until I started my Master's, I thought everything was figured out; I'd go to university, finish grad school, and do microbiology just like my parents. I always loved to learn new things but grad school helped me find an unexpected passion; coding.",
  "I cracked open my terminal on Ubuntu that I installed on a whim and made my foray into development with a script that automated entering book giveaways on Goodreads. Over time, I found myself spending more time learning development than what I was supposed to be studying and finally made the decision that this was my true calling.",
  "Transitioning to become a software developer on my own was challenging but also incredibly eye opening. In the 2 years I spent isolated in my bedroom, I was immersed in the vibrant online dev and open-source communities. I never once felt like I was making this journey alone.",
  "Finally landing a professional dev role and being able to work in a team with other developers to create products meant for real people is a dream come true. If I wasn't sure before, I now know for certain that this is what I want to be doing.",
  "I wake up each morning with the goal of writing better code than I did the previous day. I'm late to the game but I am fully dedicated to honing my codecraft and I strive to be a teammate that can be depended on.",
];

const AboutPage = ({ data }) => {
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
          {/* <Image src={data.image.ProfileImgURL} alt="Derek Kim" minW="220px" maxW="350px" /> */}
        </Flex>
        {/* Right Section */}
        <Box>
          {CONTENT.map((paragraph, index) => (
            <Text key={index} fontSize="xl" padding="2">
              {paragraph}
            </Text>
          ))}
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
