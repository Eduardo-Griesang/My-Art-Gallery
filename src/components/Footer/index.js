import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <h3 className="footer-h3">By Eduardo</h3>

      <nav className="footer-nav">
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/eduardo-griesang/"className="footer-a">
              LinkedIn
            </a>
          </li>
        </ul>
        <ul>
          <li>•</li>
        </ul>
        <ul>
          <li>
            <a href="https://github.com/Eduardo-Griesang"className="footer-a">
              GitHub
            </a>
          </li>
        </ul>
        <ul>
          <li>•</li>
        </ul>
        <ul>
          <li>
            <a href="https://portfolio-eduardo-griesang.vercel.app"className="footer-a">
              Portfolio
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer
