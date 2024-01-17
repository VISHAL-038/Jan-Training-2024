import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-logo">Your Logo</div>
        <div className="footer-links">
          <ul>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Sitemap</a>
            </li>
          </ul>
        </div>
      </div>
      <p>&copy; 2024 Your Website. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
