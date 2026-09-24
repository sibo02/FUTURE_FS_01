import "./Hero.css"
function Hero() {
  return(
  <section id="home" className="hero">
  <div className="hero-content">
    <p className="hero-tag">Frontend Developer</p>

    <h1>
      Hi, I'm <span>Sibrat Nemera</span> 👋
    </h1>

    <p className="hero-text">
      I build responsive web applications using HTML, CSS, JavaScript, and
      React.
    </p>

    <div className="hero-buttons">
      <a href="#projects" className="primary-btn">
        View Projects
      </a>

      <a href="#contact" className="secondary-btn">
        Contact Me
      </a>
    </div>
  </div>
</section>
  );
}

export default Hero