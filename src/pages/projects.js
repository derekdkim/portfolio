import React from 'react';

import Layout from '../components/layout';
import ProjectCard from '../components/ProjectCard';

// Data
const projects = [
    {
        title: "Journey Together",
        techStack: ["react", "node-js"],
        path: "/journey-together"
    },
    {
        title: "JRNL Clone",
        techStack: ["react"],
        path: "/jrnl-clone"
    }
];

const ProjectsPage = () => {

    return (
        <Layout pageTitle="Projects">
            <div>
                <h1>Featured Projects</h1>
                { projects.map((project, index) => <ProjectCard project={ project } key={ index } />)}
            </div>
        </Layout>
    );
}

export default ProjectsPage;