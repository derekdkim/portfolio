import React from 'react';
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
    useMediaQuery 
} from '@chakra-ui/react';

import Layout from '../components/layout/layout';

// Content Data
const paragraph0 = 'Why is someone trained in Microbiology trying to become a Software Developer? I thought I had everything figured out when I went to grad school until I unexpectedly fell in love with the problem-solving nature and sheer versatility of programming. As a life-long nerd, the desire to be a part of creating this ever-evolving space kept growing inside me.';
const paragraph1 = 'Thanks to the breathtaking amount of resources available online and helpful communities, I was able to learn from zero and dip my feet in open-source development, which cemented my passion for this craft. I still have a lot to learn as a self-taught developer but every new piece of technology I learn is an adventure I am excited to take part in. I’d love to be able to put my passion towards making something useful for you.';

const AboutPage = () => {
    const [isLargerThan1024] = useMediaQuery("(min-width: 1024px)");

    const SkillContainer = (props) => {
        return (
            <Flex
                p="4"
                flexDirection="column"
                { ...props }
            >
                { props.children }
            </Flex>
        );
    }
    return (
        <Layout pageTitle="About Me">
            <Heading fontSize="4xl">My Story</Heading>
            <Box
                display={{ base: "flex", md: "grid" }}
                as={ isLargerThan1024 ? Grid : Flex }
                flexDirection="column"
                templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
            >
                {/* Left Section */}
                <Flex
                    justifyContent="center"
                    alignItems="center"
                    p="4"
                >
                    <Image src='https://bit.ly/sage-adebayo' alt='profile-pic' />
                </Flex>
                {/* Right Section */}
                <Box>
                    <Text fontSize="xl" padding="2">{paragraph0}</Text>
                    <Text fontSize="xl" padding="2">{paragraph1}</Text>
                </Box>
            </Box>
            <Flex
                flexDirection="column"
                my="8"
            >
                <Heading>
                    My Skills
                </Heading>
                <Flex
                    flexDirection="row"
                    justifyContent="space-around"
                    my="8"
                >
                    {/* Front End */}
                    <SkillContainer
                        flexDirection="column"
                    >
                        <Heading>Front End</Heading>
                        <List
                            mt="2"
                        >
                            <ListItem>JavaScript</ListItem>
                            <ListItem>HTML</ListItem>
                            <ListItem>CSS</ListItem>
                            <ListItem>React.js</ListItem>
                            <ListItem>Tailwind.css</ListItem>
                            <ListItem>Gatsby</ListItem>
                            <ListItem>Chakra UI</ListItem>
                        </List>
                    </SkillContainer>
                    {/* Back End */}
                    <SkillContainer
                        flexDirection="column"
                    >
                        <Heading>Back End</Heading>
                        <List
                            mt="2"
                        >
                            <ListItem>Node.js</ListItem>
                            <ListItem>Express</ListItem>
                            <ListItem>MongoDB</ListItem>
                            <ListItem>Google Firebase</ListItem>
                            <ListItem>Jest</ListItem>
                        </List>
                    </SkillContainer>
                    {/* Other */}
                    <SkillContainer
                        flexDirection="column"
                    >
                        <Heading>Other</Heading>
                        <List
                            mt="2"
                        >
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
            <Flex
                justifyContent="center"
                alignItems="center"
                my="8"
            >
                <Link to="/contact">
                    <Button
                        colorScheme="purple"
                        size="lg"
                    >
                        Get in touch
                    </Button>
                </Link>
            </Flex>
        </Layout>
    );
}

export default AboutPage;