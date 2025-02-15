import React, { useState } from 'react'
import { FcExpand, FcCollapse } from "react-icons/fc";
import "./Project.css";

const ProjectList = ({ name, desc, techused, projectlink }) => {
    console.log(projectlink,">>>>>>>>>>>");
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
                {show ? (<p>{desc}</p>) : (<p>{desc.substring(0, 150)}...    </p>)}
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