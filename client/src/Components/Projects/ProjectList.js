import React, { useState } from 'react'
import { FcExpand, FcCollapse } from "react-icons/fc";
import "./Project.css";

const ProjectList = ({ name, desc, techused, projectlink }) => {
    const [show, setShow] = useState(false);

    const handleShowandCollapse = () => {
        setShow(!show);
    }
    return (
        <div className={show ? 'project-list-opened project-list' : 'project-list'} id='project' onClick={handleShowandCollapse}

        >
            <div className='title-and-collaps-option'>
                <h5>
                    {name}
                </h5>
                <p>
                    {show ? <FcCollapse size={20} /> : <FcExpand size={20} />}
                </p>

            </div>
            <div className='description'>
                {show ? (
                    <ul className="list-disc ml-5">
                        {desc.split('•').filter(Boolean).map((line, idx) => (
                            <li key={idx}>{line.trim()}</li>
                        ))}
                    </ul>
                ) : (
                    <ul className="list-disc ml-5">
                        {desc
                            .split('•')
                            .filter(Boolean)
                            .slice(0, 2)
                            .map((line, idx) => (
                                <li key={idx}>{line.trim()}</li>
                            ))}
                        <li>...</li>
                    </ul>
                )}

            </div>

            <div className='row'>
                {techused && techused.map((tech, index) => (
                    <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12' key={index}>
                        <div className='tech-used-in-project'>
                            <p>{tech.techname}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='live-demo-button'>
                <a target='_' href={projectlink}>Live Demo</a>
            </div>
        </div>

    )
}

export default ProjectList