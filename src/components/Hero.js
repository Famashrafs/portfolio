import React from "react";
import me from "../images/me.png";
import { LINKS } from "../links";

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <span className="hero-eyebrow">
              <span className="pulse"></span>
              FAM ASHRAF — DEVELOPER &amp; AI ENTHUSIAST
            </span>

            <h1 className="hero-title">
              Building digital experiences with{" "}
              <em>code &amp; creativity.</em>
            </h1>

            <p className="hero-sub">
              Frontend engineer crafting high-precision, editorial-grade web
              applications with React, Redux, and Tailwind — steadily expanding
              into applied AI and computer science.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                View My Work
                <span aria-hidden="true">→</span>
              </a>
              <a href="#contact" className="btn btn-ghost">
                Let's Connect
              </a>
              <a
                href={LINKS.resume}
                className="btn btn-ghost"
                target="_blank"
                rel="noreferrer"
              >
                Download Resume ↓
              </a>
            </div>

            <div className="hero-telemetry">
              <span className="loc">●</span>
              <span>{LINKS.location}</span>
              <span className="hero-mono-tag">|</span>
              <span className="gold">Available for Select Projects</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-glow"></div>
            <div className="hero-frame">
              <span className="hero-coord">27.18°N · 31.18°E</span>
              <img src={me} alt="Fam Ashraf — professional portrait" />
              <div className="hero-caption">
                <b>Fam Ashraf</b> — Frontend Engineer
                <br />
                &amp; AI Practitioner
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
