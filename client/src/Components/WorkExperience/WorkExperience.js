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
            "desc": `• Designed scalable Node.js microservices, improving performance under high traffic by 50%.
                     • Improved API performance by 40% through query enhancements and Redis caching.
                     • Led sprint planning and mentored junior developers, enhancing team efficiency by 20%.
                     • Streamlined deployments via CI/CD using GitHub Actions, reducing manual effort by 30%.
                     • Architected and maintained key backend features using Nest.js and TypeScript, ensuring 100% type safety.
                     • Engineered direct upload flow using S3 pre-signed URLs, improving performance and offloading 70% of server
                       traffic.`,
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
            "desc": `• Built over 40 RESTful APIs using Node.js, Express, and PostgreSQL.
                     • Refined database schemas and queries, reducing execution times by 15%
                     • Handled GitHub/GitLab branching strategies and workflows, improving team productivity by 25%.
                     • Implemented CI/CD pipelines using GitHub Actions, reducing deployment time by 30%.
                     • Utilized Docker for containerization, enhancing scalability and portability across environments.
                     • Implemented keyset pagination to replace OFFSET, improving query performance by 60% on large datasets.`,
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
            "desc": `• Delivered over 12 backend services using Laravel PHP & Node.js, enhancing system stability.
                     • Revamped SQL queries for better efficiency, achieving a 20% drop in response time.
                     • Ensured multi-platform API compatibility for a seamless user experience.
                     • Implemented JWT authentication for secure user access.
                     • Optimized database queries, reducing response times by 30%.
                     • Secured user accounts using JWT & OAuth2 authentication.`,
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
                            {item.desc.split('•').filter(Boolean).map((line, idx) => (
                                <p key={idx}>• {line.trim()}</p>
                            ))}

                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </div>


        </div>
    )
}

export default WorkExperience