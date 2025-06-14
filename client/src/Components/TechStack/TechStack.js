import React, { useState } from 'react';
import "./TechStack.css";
import { motion } from 'framer-motion';
const TechStack = () => {

    const data = [
        {
            name: "Node.js"
        },
        {
            name: "Express.js"
        },
        {
            name: "Fastify"
        },
        {
            name: "NestJS"
        },
        {
            name: "Laravel"
        },
        {
            name: "PHP"
        },
        {
            name: "JavaScript"
        },
        {
            name: "GraphQl"
        },
        {
            name: "EJS -- Embedded JavaScript templates"
        },
        {
            name: "React"
        },
        {
            name: "kafka"
        },
        {
            name: "MySQL"
        },
        {
            name: "PostgreSQL"
        },
        {
            name: "MongoDB"
        },
        {
            name: "Docker"
        },

    ];

    const colors = [
        "#CD5C5C",
        "#FFBF00",
        "#DE3163",
        "#6495ED",
        "#9FE2BF",
        "#808000",
        "#800000",
        "#6E2C00",
        "#008000",
        "#800080",
        "#D433FF",
        "#E9FF33",
        "#4CFF33",
        "#FF3393",
        "#6495ED"
    ];

    const [showMoreTechStack, setShowMoreTechStack] = useState(9);


    const loadMore = () => {
        setShowMoreTechStack((prev) => prev + 3);
    }
    return (
        <div className='container techstack-section' id='techstack'>
            <div className='section-title'>
                <h5>Tech Stack</h5>
                <span className='line'> </span>
            </div>

            <div className='row'>
                {data.slice(0, showMoreTechStack).map((item, index) => (
                    <motion.div 
                        className='col-xl-4 col-lg-4 col-md-6 col-sm-12' 
                        key={index}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <div className={index === 0 ? 'tech-content-marked tech-content': 'tech-content' }>
                            <span className="tech-number" style={{ backgroundColor: colors[index] }}>
                                {index + 1}
                            </span>
                            <p>{item.name}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {showMoreTechStack >= data.length ? null : (
                <span className='load-more-tech-stack' onClick={loadMore}>
                    Load More
                </span>
            )}

        </div>
    )
}

export default TechStack