import React, { useState } from "react";
import { LINKS } from "../links";
import travelImg from "../images/travel.PNG";
import ecommerceImg from "../images/e-commerce.PNG";
import pizzaImg from "../images/pizza.PNG";

const cases = [
  {
    no: "Case Study 01",
    key: "travelize",
    title: "Travel Website",
    tag: LINKS.projects.travelize.tag,
    desc: "An interactive travel platform with user login, a dynamic map, journey planning, and a community blog.",
    visual: travelImg,
    tech: ["React", "Map", "Redux", "Vercel"],
    long: [
      "A React-based travel platform featuring user login, a dynamic map, journey planning, and a blog section.",
      "Integrated hotel recommendations and a travel community for user interaction.",
    ],
  },
  {
    no: "Case Study 02",
    key: "ecommerce",
    title: "E-commerce Website",
    tag: LINKS.projects.ecommerce.tag,
    desc: "A fully responsive storefront with authentication, a shopping cart, and optimized SEO.",
    visual: ecommerceImg,
    tech: ["React", "Redux", "Auth", "SEO"],
    long: [
      "A fully responsive e-commerce platform built with React, HTML, CSS, and JavaScript.",
      "Implemented user authentication, shopping cart functionality, and optimized SEO.",
    ],
  },
  {
    no: "Case Study 03",
    key: "restaurant",
    title: "Pizza Restaurant Website",
    tag: LINKS.projects.restaurant.tag,
    desc: "An interactive one-page restaurant site with polished navigation and a seamless UI/UX.",
    visual: pizzaImg,
    tech: ["React", "UI / UX", "Restaurant", "Vercel"],
    long: [
      "Designed an interactive, one-page restaurant website using React.",
      "Improved navigation and UI/UX for a seamless user experience.",
    ],
  },
  {
    no: "Case Study 04",
    key: "weather",
    title: "Weather Intelligence Portal",
    tag: LINKS.projects.weather.tag,
    desc: "A radar telemetry console with dynamic wind velocity charts and atmospheric radar maps.",
    visual: "RADAR — TELEMETRY",
    tech: ["React", "Charting", "HTTP APIs", "Vercel"],
    long: [
      "A meteorological intelligence portal that turns raw atmospheric data into a legible console.",
      "Dynamic wind velocity charts and radar overlays give instant visual context from live HTTP APIs.",
    ],
  },
];

function CaseStudies({ id }) {
  const [active, setActive] = useState(null);

  return (
    <section className="section" id={id}>
      <div className="container">
        <div className="section-head reveal">
          <span className="section-tag">{"//"} 04 — Curated Works</span>
          <h2 className="section-title">
            Selected <em>case studies</em>
          </h2>
        </div>

        <div className="case-list">
          {cases.map((c, i) => {
            const links = LINKS.projects[c.key];
            return (
              <article
                className={`case-card ${i % 2 === 1 ? "flip" : ""}`}
                key={c.key}
              >
                <a
                  className="case-visual"
                  href={links.demo}
                  target="_blank"
                  rel="noreferrer"
                  title={`Open ${c.title} live`}
                >
                  <div className="shot">
                    
                      <img src={c.visual} alt={c.title} />
                    
                  </div>
                  <div className="scanline"></div>
                  <span className="case-visual-open">Open Live Demo ↗</span>
                </a>

                <div className="case-body">
                  <div className="case-no">{c.no}</div>
                  <span className="case-tag">{c.tag}</span>
                  <h3>{c.title}</h3>
                  <p className="case-desc">{c.desc}</p>

                  <div className="case-actions">
                    <a
                      className="btn btn-primary"
                      href={links.demo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo <span aria-hidden="true">↗</span>
                    </a>
                    <a
                      className="btn btn-ghost"
                      href={links.source}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Source
                    </a>
                  </div>

                  <div className="case-chip-row">
                    {c.tech.map((t) => (
                      <span className="chip" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      <div
        className={`modal-overlay ${active ? "open" : ""}`}
        onClick={() => setActive(null)}
      >
        <div className="modal-panel" onClick={(e) => e.stopPropagation()}>
          {active && (
            <>
              <div className="modal-head">
                <h3>{active.title}</h3>
                <button
                  className="modal-close"
                  onClick={() => setActive(null)}
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>
              <div className="modal-body">
                <span className="case-tag">{active.tag}</span>
                {active.long.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
                <div className="modal-tech">
                  {active.tech.map((t) => (
                    <span className="chip" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
                <div className="case-actions">
                  <a
                    className="btn btn-primary"
                    href={LINKS.projects[active.key].demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open Live Demo <span aria-hidden="true">↗</span>
                  </a>
                  <a href="#contact" className="btn btn-ghost">
                    Discuss a Similar Project
                  </a>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default CaseStudies;
