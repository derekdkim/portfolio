import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Flex, Button, Heading, Text, Image, Icon } from "@chakra-ui/react";
import { Link } from "gatsby";

const ProjectCard = (props) => {
  const { title, techStack, path, desc, thumbnail } = props.project;

  return (
    <Flex flexDirection={{ base: "column", md: "Row" }} m="6">
      {/* Thumbnail */}
      <Flex alignItems="center" justifyContent="center">
        <Image
          src={thumbnail}
          fallbackSrc="https://via.placeholder.com/150"
          alt="project-thumbnail"
          boxSize="150px"
          minW="150px"
          fit="contain"
        ></Image>
      </Flex>
      {/* Info */}
      <Flex
        flexDirection="column"
        ml={{ base: "0", md: "6" }}
        justifyContent={{ base: "center", md: "initial" }}
        alignItems={{ base: "center", md: "initial" }}
        flexGrow="1"
      >
        <Heading fontSize={{ base: "xl", md: "3xl" }} ml={{ md: "2" }}>{title}</Heading>
        <Flex d={{ base: "none", md: "flex" }}>
          <Text p="2" my="2">
            {desc}
          </Text>
        </Flex>
        <Flex flexDirection={{ base: "column", md: "row" }} justify>
          {/* Stack Icons */}
          <Flex
            alignItems="center"
            my={{ base: "2", md: "0" }}
            justify={{ base: "center", md: "flex-start" }}
          >
            {
              /* Tech stack icons */
              techStack.length > 0 &&
                techStack.map((icon, index) => (
                  <Icon
                    as={FontAwesomeIcon}
                    icon={["fab", icon]}
                    fontSize="2xl"
                    mx="2"
                    key={index}
                  />
                ))
            }
          </Flex>
          <Flex
            ml={{ base: "0", md: "auto" }}
            my={{ base: "2", md: "0" }}
            mr={{ base: "0", md: "8" }}
            justify={{ base: "center", md: "flex-start" }}
          >
            <Link to={path}>
              <Button colorScheme="purple">See details</Button>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProjectCard;
