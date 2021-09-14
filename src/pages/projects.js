import React from 'react';
import { Flex, Heading } from '@chakra-ui/react';

import Layout from '../components/layout/layout';
import ProjectCard from '../components/ProjectCard';

// Data
const projects = [
    {
        title: "Journey Together",
        techStack: ["react", "node-js"],
        path: "/journey-together",
        desc: "A full-stack cooperative goal-driven social media app. Made with the MERN (MongoDB, Express, React, Node.js) stack."
    },
    {
        title: "JRNL Clone",
        techStack: ["react"],
        path: "/jrnl-clone",
        desc: "A full-stack clone of the online journaling app JRNL. Backend features (authentication, database, etc.) as well as hosting are done on Google Firebase."
    }
];

const ProjectsPage = () => {

    return (
        <Layout pageTitle="Projects">
            <Flex
                flexDirection="column"
            >
                <Heading>Featured Projects</Heading>
                <Flex
                    flexDirection="column"    
                >
                    { projects.map((project, index) => <ProjectCard project={ project } key={ index } index={ index } />)}
                </Flex>
            </Flex>
        </Layout>
    );
}

export default ProjectsPage;