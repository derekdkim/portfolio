import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    Icon, 
    IconButton, 
    Flex, 
    Heading, 
    Text, 
    Button, 
    FormControl,
    FormLabel,
    Input,
    Textarea
} from '@chakra-ui/react';

import Layout from '../components/layout/layout';

const ContactPage = () => {

    return (
        <Layout pageTitle="Contact Me">
            <Flex
                flexDirection="column"
            >
                <Heading
                    fontSize="4xl"
                >
                    Let's Get in Touch!
                </Heading>
                <Flex my="4">
                    <IconButton
                        aria-label="Visit Derek's Github"
                        icon={<Icon as={ FontAwesomeIcon } icon={["fab", "github"]} fontSize="3xl" />}
                        mr="4"
                    />
                    <IconButton
                        aria-label="Visit Derek's Linkedin"
                        icon={<Icon as={ FontAwesomeIcon } icon={["fab", "linkedin"]} fontSize="3xl" />}
                    />
                </Flex>
                <Flex
                    flexDirection="column"
                    my="4"
                >
                    <Heading
                        fontSize="3xl"
                        mb="2"
                    >
                        My Contact Info
                    </Heading>
                    <Text fontSize="lg" m="2">
                        <FontAwesomeIcon icon="envelope" /> Email: derek.kim1024@gmail.com
                    </Text>
                    <Text fontSize="lg" m="2">
                        <FontAwesomeIcon icon="phone" /> Phone: (204) 293-7735
                    </Text>
                </Flex>
                <Flex
                    flexDirection="column"
                >
                    <Text fontSize="lg" my="8" fontWeight="bold">
                        My inbox is always open. Leave me a message and I will get back to you as soon as I am able.
                    </Text>
                    <form>
                        <Flex>
                            <FormControl id="name" p="2">
                                <FormLabel>Name</FormLabel>
                                <Input type="text"></Input>
                            </FormControl>
                            <FormControl id="email" p="2">
                                <FormLabel>Email</FormLabel>
                                <Input type="email"></Input>
                            </FormControl>
                        </Flex>
                        <FormControl id="message" p="2">
                            <FormLabel>Message</FormLabel>
                            <Textarea type="text"></Textarea>
                        </FormControl>
                        <Flex ml="2" mt="4">
                            <Button
                                leftIcon={<Icon as={ FontAwesomeIcon } icon="paper-plane" />}
                                colorScheme="purple"
                            >Send</Button>
                        </Flex>
                    </form>
                </Flex>
            </Flex>
        </Layout>
    );
}

export default ContactPage;