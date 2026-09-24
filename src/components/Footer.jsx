import "./Footer.css";
function Footer() {
  return (
    <footer className="footer">

      <div className="footer-section">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Skills</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Projects</h3>
        <ul>
          <li><a href="#">My Projects</a></li>
          <li><a href="#">GitHub</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Connect</h3>
        <ul>
          <li><a href="#">LinkedIn</a></li>
          <li><a href="#">Email</a></li>
        </ul>
      </div>

      <p className="copyright">
        © 2026 Sibrat Nemera. All rights reserved.
      </p>

    </footer>
  );
}

export default Footer;

