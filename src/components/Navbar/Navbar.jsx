import { useState, useEffect } from "react";
import "./Navbar.css";

const sections = ["home", "services", "howitworks", "pricing", "contact"];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  // Track scroll for active link
  useEffect(() => {
    const handleScroll = () => {
      let current = "home";
      sections.forEach((section) => {
        const elem = document.getElementById(section);
        if (elem) {
          const top = elem.offsetTop - 80;
          if (window.scrollY >= top) current = section;
        }
      });
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e, section) => {
    e.preventDefault();
    setMenuOpen(false);
    const elem = document.getElementById(section);
    if (elem) elem.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
<div 
  className="logo"
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  style={{ cursor: "pointer" }}
>
  <span>🧺</span> FreshWash
</div>


        {/* Desktop Links */}
        <ul className="nav-links">
          {sections.map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={active === section ? "active" : ""}
                onClick={(e) => handleClick(e, section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://wa.me/2347070670152"
              className="cta-btn"
              target="_blank"
              rel="noreferrer"
            >
              Book Now
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu-wrapper ${menuOpen ? "show" : ""}`}>
        <ul className="mobile-menu">
          {sections.map((section) => (
            <li key={section} onClick={(e) => handleClick(e, section)}>
              <a
                href={`#${section}`}
                className={active === section ? "active" : ""}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://wa.me/2347070670152"
              className="cta-btn mobile-cta"
              target="_blank"
              rel="noreferrer"
            >
              Book Now
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
