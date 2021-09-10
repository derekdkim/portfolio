import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProjectCard = (props) => {

    const { title, techStack } = props.project;

    return (
        <div>
            {/* Thumbnail */}
            <div>
                <img src='' alt='project-thumbnail'></img>
            </div>
            {/* Info */}
            <div>
                <h2>{ title }</h2>
                <div>
                    <p>Description</p>
                </div>
                <div>
                    {/* Stack Icons */}
                    <div>
                        { /* Tech stack icons */
                            techStack.length > 0 &&
                            techStack.map((icon, index) => <FontAwesomeIcon icon={ ['fab', icon] } key={ index } />)
                        }
                    </div>
                    <div>
                        <button>See details</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;