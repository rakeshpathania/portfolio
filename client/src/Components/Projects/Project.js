import React from "react";
import ProjectList from "./ProjectList";
import "./Project.css";
import Zoom from "react-reveal/Zoom";

const Project = () => {
    const data = [
        {
            name: "EarthLink - Telecom Service Management Platform",
            desc: `• Telecom Service Management Platform
                   • Created backend services and provisioned NGINX to act as a reverse proxy, load balancer, and cache, boosting
                     performance and reducing response time by 40%
                   • Collaborated with clients to refine features, boosting delivery speed 40%.`,
            projectlink: "https://www.earthlink.net/welcome/",
            techused: [
                { techname: "Node.js" },
                { techname: "Express.js" },
                { techname: "Fastify.js" },
                { techname: "PostgreSQL" },
                { techname: "JavaScript" },
                { techname: "React" },
                { techname: "Redis" },
                { techname: "NGNINX" },
                { techname: "PM2" },
                { techname: "Kafka" },
                { techname: "Google API's" },
            ],
        },
        {
            name: `Snappy-Let's Chat`,
            desc: `• Developed end-to-end encrypted messaging with Socket.io for secure communication.
                   • Implemented user authentication and real-time chat functionality using Node.js, Express.js, and Socket.io.
                   • Integrated MongoDB for data storage and retrieval, ensuring efficient message storage and retrieval.
                   • Facilitated cross-device chat and user presence tracking, increasing active user sessions by 30%.`,
            projectlink: "https://melodic-brioche-985840.netlify.app/login",
            techused: [
                { techname: "Node.js" },
                { techname: "Express.js" },
                { techname: "MongoDb" },
                { techname: "React" },
                { techname: "JavaScript" },
                { techname: "Socket.Io" },
            ],
        },
        {
            name: "PaisaXC- A Crypto Exchange",
            desc: `• Managed Node.js APIs connected with a Vue.js frontend.
                   • Implemented user authentication and real-time chat functionality using Node.js, Express.js, and Socket.io.
                   • Structuring P2P trading and buyer-seller chat modules, improving retention by 20%.
                   • Integrated MongoDB for data storage and retrieval, ensuring efficient message storage and retrieval.
                   • Established secure dispute resolution and identity verification.`,
            projectlink: "https://www.demo.paisaxc.com/",
            techused: [
                { techname: "Laravel" },
                { techname: "MySql" },
                { techname: "Vue.Js" },
                { techname: "Node.Js" },
                { techname: "Express.Js" },
                { techname: "JavaScript" },
                { techname: "Socket.Io" },
            ],
        },
        {
            name: "OSRJobs- A Job Portal",
            desc: `• Executed job posting, CSV import, and application workflows, streamlining hiring for over 50 employers.
                   • Embedded Stripe’s webhook system to sync payment statuses across microservices in real-time, reducing payment
                     processing delays by 45%.
                   • Migrated legacy monoliths to microservices, improving scalability and performance by 30%.
                   • Automated internal workflows by building an admin panel with React & Node.js, reducing operational time by
                     40%.`,
            projectlink: "https://www.osrjobs.com/",
            techused: [
                { techname: "Node.js" },
                { techname: "Express" },
                { techname: "MongoDb" },
                { techname: "NextJs" },
                { techname: "JavaScript" },
                { techname: "JWT/OAuth" },
                { techname: "Stripe API" },
                { techname: "AWS S3" },
            ],
        },
    ];
    return (
        <Zoom>
            <div className="container project-section">
                <div className="section-title">
                    <h5>Projects</h5>
                    <span className="line"></span>
                </div>

                <div className="row">
                    {data.map((item, index) => (
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <ProjectList {...item} />
                        </div>
                    ))}
                </div>
            </div>
        </Zoom>
    );
};

export default Project;
