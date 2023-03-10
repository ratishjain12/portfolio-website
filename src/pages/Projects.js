import { React, useEffect, useState } from 'react'
import sanityClient from '../client';
import Projectcard from '../components/Projectcard'
import { motion } from 'framer-motion';
import imageUrlBuilder from '@sanity/image-url'

import './styles/projects.css'

function urlFor(source) {
    return imageUrlBuilder(sanityClient).image(source)
}

function Projects() {
    const [projectData, setProjectData] = useState();


    useEffect(() => {
        sanityClient.fetch(`*[_type == "project"]{
            title,
            githublink,
            hostedlink,
            image
        }`).then((data) => setProjectData(data)).catch(console.error);
    }, [])


    return (
        <div className="Projects">
            <h1>Projects</h1>
            <motion.div className='projectcards'>

                {projectData && projectData.map((project, index) => (
                    <Projectcard title={project.title} image={urlFor(project.image)} githublink={project.githublink} hostedlink={project.hostedlink} />
                ))}
            </motion.div>

        </div>
    )
}

export default Projects