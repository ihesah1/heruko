import React from "react";
import "./style.css";
import SkillItem from "../SkillItem";

const Skills = () => {
  const skills = [
    "HTML",
    "CSS",
    "Javascript",
    "jQuery",
  ];
  return (
    <div className="skills">
      <div className="title">
       
        <h2>SKILLS</h2>
      </div>
      <div className="flex">
        <hr className="resumeLine" />
      </div>
      <div className="skillWrapper">
        <ul className="skillsList">
          {skills.map((skill) => {
            return <SkillItem skill={skill} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Skills;