import React from "react";

const proofs = [
  {
    value: "10+",
    label: "Shipped Projects",
    sub: "From concept to production",
  },
  {
    value: "React",
    label: "/ Modern Web",
    sub: "Hooks, Redux, Tailwind",
  },
  {
    value: "API",
    label: "& DB Workflows",
    sub: "Firebase, Auth, Stripe",
  },
  {
    value: "AI",
    label: "/ CS Specialization",
    sub: "Algorithms & ML transition",
  },
];

function Perspective({ id }) {
  return (
    <section className="section section-alt" id={id}>
      <div className="container">
        <div className="perspective-grid">
          <blockquote className="perspective-quote">
            From the engineering roots of Assiut to{" "}
            <em>scalable, cinematic web products</em> — where precision meets
            purpose.
          </blockquote>

          <div className="perspective-body">
            <p>
              I'm <strong>Fam Ashraf</strong>, a frontend software engineer
              focused on building fast, accessible, and beautiful user
              interfaces that hold up under real-world scale. My work spans
              responsive storefronts, spatial map platforms, and real-time
              applications — all engineered with a disciplined, detail-first
              mindset.
            </p>
            <p>
              Beyond the interface, I'm actively deepening my foundations in{" "}
              <strong>applied AI and computer science</strong> — data
              structures, algorithms, and machine learning — to build systems
              that are as intelligent as they are elegant.
            </p>
          </div>
        </div>

        <div className="proof-grid">
          {proofs.map((p, i) => (
            <div className="proof-card" key={i}>
              <div className="proof-value">{p.value}</div>
              <div className="proof-label">
                {p.label}
                <span className="sub">{p.sub}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Perspective;
