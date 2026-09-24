import "./About.css"
function About() {
  return (
   <section id="about" className="about">
  <div className="about-container">
    <div className="about-text">
      <p className="section-tag">About Me</p>

      <h2>Building modern web experiences.</h2>

      <p>
        I'm Sibrat Nemera, a Software Engineering student at Adama Science and
        Technology University with a passion for frontend development.
      </p>

      <p>
        I enjoy turning ideas into responsive, user-friendly websites using
        HTML, CSS, JavaScript, and React. My goal is to become a Full Stack
        Developer by continuously building real-world projects.
      </p>

      <p className="about-highlight">
        Currently learning React and Full Stack Development 🚀
      </p>
    </div>

    <div className="about-cards">
      <div className="about-card">
        <h3>10+</h3>
        <p>Projects Built</p>
      </div>

      <div className="about-card">
        <h3>4</h3>
        <p>Core Frontend Skills</p>
      </div>

      <div className="about-card">
        <h3>React</h3>
        <p>Current Focus</p>
      </div>

      <div className="about-card">
        <h3>ASTU</h3>
        <p>Software Engineering</p>
      </div>
    </div>
  </div>
</section>
  )
}

export default About
