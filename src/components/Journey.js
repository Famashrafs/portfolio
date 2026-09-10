import React from "react";

const phases = [
  {
    phase: "Phase 01",
    date: "2023 — 2024",
    title: "Self-Taught Foundations & Web Mechanics",
    desc: "Laid the engineering groundwork from scratch — HTML, CSS, JavaScript, and the core mechanics of how the web works under the hood.",
  },
  {
    phase: "Phase 02",
    date: "2024 — 2025",
    title: "Frontend Engineering & Modern Frameworks",
    desc: "Leveled into React, state management with Redux, and utility-driven styling with Tailwind to build real, production-minded interfaces.",
  },
  {
    phase: "Phase 03",
    date: "2025",
    title: "Full-Stack Workflows & Cloud Integration",
    desc: "Wired complete applications end to end — Firebase, authentication, REST and GraphQL endpoints, and serverless deployments on Vercel.",
  },
  {
    phase: "Phase 04",
    date: "Present Horizon",
    title: "Artificial Intelligence & Computer Science",
    desc: "Deepening data structures, algorithms, and applied machine learning — charting an active trajectory into AI and CS specialization.",
  },
];

function Journey({ id }) {
  return (
    <section className="section section-alt" id={id}>
      <div className="container">
        <div className="section-head reveal">
          <span className="section-tag">{"//"} 05 — Trajectory</span>
          <h2 className="section-title">
            A deliberate <em>architectural journey</em>
          </h2>
        </div>

        <div className="timeline">
          {phases.map((p) => (
            <div className="tl-item" key={p.phase}>
              <div className="tl-phase">{p.phase}</div>
              <div className="tl-date">{p.date}</div>
              <h4>{p.title}</h4>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Journey;
