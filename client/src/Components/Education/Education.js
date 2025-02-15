import React from 'react';
import './Education.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
    const data = [
        {
            name: "DAV University, Jalandhar",
            degree: "B.TECH CSE (computer science)",
            year: "2017 - 2021",
            score: "6.66(CGPA)",
            desc: "Completed coursework in data structures and algorithms, object-oriented programming, database management systems, operating systems, computer networks, software engineering, and web development. Proficient in programming languages such as Java, C++, and Python. Acquired knowledge of database design and management, software development methodologies, and computer networking principles. Skilled in web development using HTML, CSS, and JavaScript."
        },
        {
            name: "Pratap World School, Pathankot (CBSE)  ",
            degree: "Class XII",
            year: "2016-2017",
            score: "79%",
            desc: "Completed Class 12th with a strong focus on Science subjects—Physics, Chemistry, and Mathematics. Built a solid foundation in fundamental principles, practical applications, and problem-solving. Proficient in Newtonian mechanics, electromagnetism, thermodynamics, chemical reactions, and algebra, calculus, geometry, and trigonometry. Skilled in conducting precise experiments and analyzing data. Consistently excelled academically with interdisciplinary aptitude."
        },
        {
            name: "Vijay Memorial School, Indora (CBSE)",
            degree: "Class X",
            year: "2014-2015",
            score: "8.6(CGPA)",
            desc: "Successfully completed Class 10th with a comprehensive curriculum encompassing subjects such as Mathematics, Science, Social Studies, and English. Demonstrated proficiency in fundamental concepts, problem-solving, and effective communication. Maintained a consistent academic record, displaying dedication, analytical skills, and a strong ability to grasp diverse subjects."
        },
    ];
    const colors = [
        "#008000",
        "#6E2C00",
        "#808000"
    ];
    return (
        <div className='container education-section' id='education'>
            <div className='section-title'>
                <h5>Education</h5>
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
                            icon={<FaGraduationCap />}
                        >
                            <h3 className="vertical-timeline-element-title">{item.name}</h3>
                            <div className='degree-content'>
                                <h5 className="vertical-timeline-element-subtitle" style={{ color: "#FFBF00" }}>{item.degree}</h5>
                                <span style={{ color: "#FFBF00" }} >{item.score}</span>
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

export default Education