import "./Skills.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaPython,
} from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import { MdDevices } from "react-icons/md";

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2 className="skills-title">My Skills</h2>

      <div className="skills-grid">
        <div className="skill-card">
          <FaHtml5 className="skill-icon" />
          <span>HTML5</span>
        </div>

        <div className="skill-card">
          <FaCss3Alt className="skill-icon" />
          <span>CSS3</span>
        </div>

        <div className="skill-card">
          <FaJs className="skill-icon" />
          <span>JavaScript</span>
        </div>

        <div className="skill-card">
          <FaReact className="skill-icon" />
          <span>React</span>
        </div>

        <div className="skill-card">
          <FaGitAlt className="skill-icon" />
          <span>Git</span>
        </div>

        <div className="skill-card">
          <FaPython className="skill-icon" />
          <span>Python</span>
        </div>

        <div className="skill-card">
          <MdDevices className="skill-icon" />
          <span>Responsive Design</span>
        </div>

        <div className="skill-card">
          <TbApi className="skill-icon" />
          <span>REST APIs</span>
        </div>
      </div>
    </section>
  );
}

export default Skills;