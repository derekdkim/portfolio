import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Flex, Button, Heading, Text, Image, Icon } from '@chakra-ui/react';
import { Link } from 'gatsby';

const ProjectCard = (props) => {

    const { index } = props;
    const { title, techStack, path, desc } = props.project;

    return (
        <Flex
            flexDirection={{ base:"column", md: index % 2 == 0 ? "row" : "row-reverse" }}
            m="6"
        >
            {/* Thumbnail */}
            <Flex
                alignItem="center"
                justifyContent="center"
            >
                <Image 
                    src='' 
                    fallbackSrc="https://via.placeholder.com/150"
                    alt='project-thumbnail'
                    boxSize="150px"
                    minW="150px"
                ></Image>
            </Flex>
            {/* Info */}
            <Flex
                flexDirection="column"
                ml={{ base: "0", md: index % 2 == 0 ? "4" : "0" }}
                mr={{ base: "0", md: index % 2 == 0 ? "0" : "4" }}
                justifyContent={{ base: "center", md: "initial" }}
            >
                <Heading
                    fontSize={{ base: "xl", md: "3xl" }}
                >
                    { title }
                </Heading>
                <Flex
                    d={{ base: "none", md: "flex" }}
                >
                    <Text
                        bg="gray.100"
                        p="2"
                        m="2"
                        rounded="lg"
                    >
                        { desc }
                    </Text>
                </Flex>
                <Flex
                    flexDirection={{ base: "column", md: "row" }}
                >
                    {/* Stack Icons */}
                    <Flex
                        alignItems="center"
                        my={{ base: "2", md: "0" }}
                    >
                        { /* Tech stack icons */
                            techStack.length > 0 &&
                            techStack.map((icon, index) => <Icon as={ FontAwesomeIcon } icon={["fab", icon]} fontSize="2xl" mx="2" key={ index } />)
                        }
                    </Flex>
                    <Flex 
                        ml={{ base: "0", md: "auto" }}
                        my={{ base: "2", md: "0" }} 
                        mr="8"
                        justifyContent={{ base: "center", md: "initial" }}
                    >
                        <Link to={ path }>
                            <Button colorScheme="yellow">See details</Button>
                        </Link>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
}

export default ProjectCard;