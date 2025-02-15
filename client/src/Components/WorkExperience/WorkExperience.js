import React from 'react';
import './WorkExperience.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdWorkHistory } from "react-icons/md";
const WorkExperience = () => {
    const data = [
        {
            "companyname": "DigiMantra Labs Pvt. Ltd, Mohali, India",
            "position": "Node.js Developer",
            "desc": "Building server-side applications and RESTful APIs using Node.js and Express.js. Implementing routing, middleware, and error handling. Integrating with databases, such as MySQL and MongoDB. Developing web applications using React. Implementing reusable UI components. Managing application state using Redux or other state management libraries. Implementing client-side routing using React Router. Designing and implementing database schemas for MySQL and MongoDB. Writing efficient and optimized database queries. Implementing data models and relationships. Creating Docker containers for application deployment and management. Building Docker images for different components of the application. Using Hygen to automate code generation and scaffolding. Creating templates and blueprints for generating code. Automating repetitive tasks and reducing development time.",
            "year": "06/2023 – Present",
            "techskills": [
                {
                    "techname": "Node.js"
                },
                {
                    "techname": "Express.js"
                },
                {
                    "techname": "Docker"
                },
                {
                    "techname": "Hygen"
                },
                {
                    "techname": "React"
                },
                {
                    "techname": "MySQL"
                },
                {
                    "techname": "MongoDb"
                }
            ]
        },
        {
            "companyname": "Cqlsys Technologies Pvt. Ltd, Mohali, India",
            "position": "Javascript Developer",
            "desc": "Coded websites using HTML, CSS, JavaScript, and jQuery languages. Managed efficient SQL queries and data transport.Built APIs and data clients to consume APIs. Integrated third-party APIs from external applications into web platforms, front-end elements into applications. Developed web platform backends using Node.js and express frameworks. Developed the concept of technical solutions based on customer needs to ensure satisfaction. Contributed to the continual improvement of the design and development process, maintaining strong aspects while researching and providing recommendations for areas of improvement. Developed highly interactive web applications using JavaScript, HTML5, CSS, JSON, and Vue while integrating Restful APIs and external web services, ensuring high performance.",
            "year": "01/2023 – 06/2023",
            "techskills": [

                {
                    "techname": "Node.js"
                },
                {
                    "techname": "Express.js"
                },
                {
                    "techname": "EJS"
                },
                {
                    "techname": "MySQL"
                },
                {
                    "techname": "MongoDb"
                }
            ]
        },
        {
            "companyname": "LBM Solutions, Mohali, India",
            "position": "Backend Developer",
            "desc": "Write and manage API resources that can work across devices (to be used by front-end developers). Maintenance and enhancements on existing API's Experience in Authentication and authorization standards such as OAuth. Responsible for maintaining the good code quality by doing code review with team. Experience developing REST applications on modern MVC PHP frameworks such as Laravel 9. Good understanding of open-source projects Experience with REST APIs with a basic understanding of object-oriented programming (OOP) design patterns Experience using common third-party APIs Integration of data storage solutions like MySQL and MongoDB Worked with the Front-End team closely for API integration",
            "year": "12/2021 – 01/2023",
            "techskills": [
                {
                    "techname": "Laravel"
                },
                {
                    "techname": "PHP"
                },
                {
                    "techname": "Node.js"
                },
                {
                    "techname": "Express.js"
                },
                {
                    "techname": "Vue.js"
                },
                {
                    "techname": "MySQL"
                }
            ]
        }


    ];
    const colors = [
        "#800000",
        "#800080",
        "#DE3163",
    ];
    return (
        <div className='container workexperience-section' id='workexperience'>
            <div className='section-title'>
                <h5>Work Experience</h5>
                <span className='line'></span>
            </div>
            <div className='timeline-section'>
                <VerticalTimeline lineColor='#FFBF00'>
                    {data.map((item, index) => (
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: colors[index], color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                            date={item.year}
                            dateClassName='date-class'
                            iconStyle={{ background: colors[index], color: '#fff' }}
                            icon={<MdWorkHistory />}
                        >
                            <h3 className="vertical-timeline-element-title">{item.companyname}</h3>
                            <h4 className="vertical-timeline-element-subtitle">{item.position}</h4>

                            <div className='row'>
                                {item.techskills.map((tech, index) => (
                                    <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12' key={index}>
                                        <div className='tech-skills'>
                                            <p>{tech.techname}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <p>
                                {item.desc}
                            </p>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </div>


        </div>
    )
}

export default WorkExperience