//file name and fuction name should be same

import "./Navbar.css";

function Navbar() {
  return (
    <header>
      <nav class="navbar">
        <div class="logo">Your Logo</div>
        <ul class="nav-list">
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="about.html">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li class="dropdown">
            <a href="#">Products</a>
            <ul class="dropdown-content">
              <li>
                <a href="#">Product 1</a>
              </li>
              <li>
                <a href="#">Product 2</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
