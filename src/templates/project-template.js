import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";

import Layout from "../components/layout";

const ProjectTemplate = ({ pageContext: { project } }) => {
    return (
        <Layout>
            <div>
                <h1>{ project.title }</h1>
                <div>
                    <FontAwesomeIcon icon={["fab", "github"]} />
                    <span>View Source Code:</span>
                    {   /* Source Code Links */
                        project.components.map((component, index) => <Link to={ component.url } key={ index } ><button>{ component.name }</button></Link>)
                    }
                </div>
                <div>
                    {   /* Project Description */
                        project.desc.map((paragraph, index) => <p key={ index }>{ paragraph }</p>)
                    }
                </div>
                <div>
                    <Link to={ project.url }><button>Try it out</button></Link>
                </div>
                <div>
                    <h2>Technologies Used</h2>
                    <div>
                        { /* Tech stack for each component of the project */
                            project.components.map((component, index) => 
                                <div key={ index } >
                                    {   /* Add section header if more than one component */
                                        project.components.length > 1 &&
                                        <h1>{ component.name }</h1>
                                    }
                                    <ul>
                                        {   /* List of tech used for the component */
                                            component.tech.map((tech, index) => <li>{ tech }</li>)
                                        }
                                    </ul>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default ProjectTemplate;