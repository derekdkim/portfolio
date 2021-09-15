import React, { useEffect } from 'react';
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
    Textarea,
    Link,
    useToast
} from '@chakra-ui/react';
import { useForm } from '@formspree/react';

import Layout from '../components/layout/layout';

const ContactPage = () => {
    const [state, handleSubmit] = useForm("mgerdogg");
    const toast = useToast();

    useEffect(() => {
        if (state.succeeded) {
            toast({
                title: "Message sent!",
                description: "Thanks for reaching out to me.",
                status: "success",
                duration: 5000,
                isClosable: true
            });
        }
    }, [state.succeeded, toast]);

    return (
        <Layout pageTitle="Contact Me">
            <Flex
                flexDirection="column"
            >
                <Heading
                    fontSize="4xl"
                    mb="8"
                >
                    Let's Get in Touch!
                </Heading>
                <Flex my="4">
                    
                    <Link href="https://github.com/derekdkim">
                        <IconButton
                            aria-label="Visit Derek's Github"
                            icon={<Icon as={ FontAwesomeIcon } icon={["fab", "github"]} fontSize="3xl" />}
                            mr="4"
                            variant="ghost"
                        />
                    </Link>
                    <Link href="https://ca.linkedin.com/">
                        <IconButton
                            aria-label="Visit Derek's Linkedin"
                            icon={<Icon as={ FontAwesomeIcon } icon={["fab", "linkedin"]} fontSize="3xl" />}
                            variant="ghost"
                        />
                    </Link>
                </Flex>
                <Flex
                    flexDirection="column"
                    my="4"
                >
                    <Heading
                        fontSize="3xl"
                        my="8"
                    >
                        My Contact Info
                    </Heading>
                    <Text fontSize="lg" m="2">
                        <FontAwesomeIcon icon="envelope" /> Email: derek.kim1024@gmail.com
                    </Text>
                </Flex>
                <Flex
                    flexDirection="column"
                >
                    <Text fontSize="lg" my="8" fontWeight="bold">
                        My inbox is always open. Leave me a message and I will get back to you as soon as I am able.
                    </Text>
                    <form onSubmit={ handleSubmit }>
                        <Flex>
                            <FormControl id="name" p="2">
                                <FormLabel>Name</FormLabel>
                                <Input type="text" name="name"></Input>
                            </FormControl>
                            <FormControl id="email" p="2">
                                <FormLabel>Email</FormLabel>
                                <Input type="email" name="email"></Input>
                            </FormControl>
                        </Flex>
                        <FormControl id="message" p="2">
                            <FormLabel>Message</FormLabel>
                            <Textarea type="text" name="message"></Textarea>
                        </FormControl>
                        <Flex ml="2" mt="4">
                            <Button
                                leftIcon={<Icon as={ FontAwesomeIcon } icon="paper-plane" />}
                                colorScheme="purple"
                                type="submit"
                                disabled={ state.submitting }
                            >
                                Send
                            </Button>
                        </Flex>
                    </form>
                </Flex>
            </Flex>
        </Layout>
    );
}

export default ContactPage;