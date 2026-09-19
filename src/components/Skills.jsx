import "./Skills.css"
function Skills() {
  return (
    <section id="skills" className="skills">
      <h2 className="skills-title">My Skills</h2>
       <div className="skill-category">
          <h3>Frontend</h3>

            <ul className="skills-list">
              <li className="skill-item">HTML5</li>
              <li className="skill-item">CSS3</li>
              <li className="skill-item">JavaScript</li>
              <li className="skill-item">React</li>
           </ul>
      </div>

      <div className="skill-category">
         <h3>Programming</h3>

          <ul className="skills-list">
           <li className="skill-item">Java</li>
           <li className="skill-item">Python</li>
           <li className="skill-item">C++</li>
           </ul>
      </div>
    </section>
  )
}

export default Skills