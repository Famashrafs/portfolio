import React from "react";
import { LINKS } from "../links";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            FAM<span className="dot">.</span>ASHRAF
          </div>
          <div className="footer-copy">
            © {new Date().getFullYear()} Fam Ashraf — Engineered with React &amp;
            a dark palette
          </div>
          <div className="footer-links">
            <a href={LINKS.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={LINKS.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={LINKS.email}>Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
