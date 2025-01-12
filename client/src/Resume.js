import React from "react";
import "./Resume.css";

const Resume = () => {
    return (
        <div className="resume">
            <header className="header">
                <h1>Brooke Tischer</h1>
                <p>1430 Summit Ave, apt 805, Seattle, WA, 98122 | (206)-482-5159 | tischerbrooke@cityuniversity.edu</p>
            </header>

            <section className="section">
                <h2>Education</h2>
                <div className="education">
                    <h3>Master of Science in Computer Science</h3>
                    <p>CityUniversity of Seattle, Seattle, WA, USA | December 2025</p>
                    <p>GPA: 3.98</p>
                    <h3>Bachelor of Science in Business</h3>
                    <p>Minnesota State University, Mankato, MN, USA | 2017</p>
                </div>
            </section>

            <section className="section">
                <h2>Professional Experience</h2>
                <div className="experience">
                    <h3>Senior Recruiter</h3>
                    <p>Amazon, Seattle, WA | March 2020 – Present</p>
                    <ul>
                        <li>Sourced and hired top talent for various technical roles, including software engineers and data scientists.</li>
                        <li>Collaborated with hiring managers to understand job requirements and team dynamics.</li>
                        <li>Streamlined the recruitment process, reducing time-to-hire by 20%.</li>
                    </ul>
                </div>
            </section>

            <section className="section">
                <h2>Skills</h2>
                <div className="skills">
                    <ul>
                        <li>Programming Languages: SQL, Python, JavaScript</li>
                        <li>Database Management: MySQL, PostgreSQL</li>
                        <li>Recruitment Tools: LinkedIn Recruiter, Greenhouse ATS</li>
                        <li>Soft Skills: Communication, Team Collaboration, Problem-Solving</li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default Resume;
