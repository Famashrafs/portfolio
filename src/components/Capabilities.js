import React from "react";

const pods = [
  {
    index: "01",
    title: "Frontend Engine",
    desc: "Core domain mastery — crafting responsive, accessible interfaces.",
    chips: [
      "React.js",
      "Redux Toolkit",
      "ES6+",
      "HTML5",
      "CSS3",
      "Tailwind",
      "Bootstrap",
    ],
  },
  {
    index: "02",
    title: "Backend & Cloud",
    desc: "Data structures and rock-solid serverless endpoints.",
    chips: [
      "Firebase Firestore",
      "Auth Systems",
      "REST APIs",
      "GraphQL",
      "Axios",
    ],
  },
  {
    index: "03",
    title: "Tools & Spatial",
    desc: "Developer tooling and spatial data visualization at scale.",
    chips: [
      "Git / GitHub",
      "Mapbox GL",
      "Leaflet",
      "Vercel",
      "Figma",
    ],
  },
  {
    index: "04",
    title: "AI & Math",
    desc: "Applied machine learning, data structures, and LLM orchestration.",
    chips: [
      "Python",
      "Data Structures",
      "ML Foundations",
      "LLM Orchestration",
    ],
  },
];

const attributes = [
  "Collaborative Teamwork",
  "Creative Problem Solving",
  "Transparent Communication",
  "Disciplined Delivery",
];

const techSkills = [
  { label: "JavaScript", icon: "devicon-javascript-plain colored" },
  { label: "React", icon: "devicon-react-original colored" },
  { label: "Redux", icon: "devicon-redux-original colored" },
  { label: "HTML5", icon: "devicon-html5-plain colored" },
  { label: "CSS3", icon: "devicon-css3-plain colored" },
  { label: "Node.js", icon: "devicon-nodejs-plain colored" },
  { label: "Python", icon: "devicon-python-plain colored" },
  { label: "Git", icon: "devicon-git-plain colored" },
  { label: "GraphQL", icon: "devicon-graphql-plain colored" },
  { label: "REST API", icon: "fas fa-cloud" },
  { label: "Figma", icon: "devicon-figma-plain colored" },
  { label: "Photoshop", icon: "devicon-photoshop-plain colored" },
];

const softSkills = [
  { label: "Teamwork", icon: "fas fa-users" },
  { label: "Problem Solving", icon: "fas fa-lightbulb" },
  { label: "Communication", icon: "fas fa-comments" },
  { label: "Creativity", icon: "fas fa-brain" },
  { label: "Time Management", icon: "fas fa-clock" },
];

function Capabilities({ id }) {
  return (
    <section className="section" id={id}>
      <div className="container">
        <div className="section-head reveal">
          <span className="section-tag">{"//"} 02 — Engineering Capabilities</span>
          <h2 className="section-title">
            The technical <em>ecosystem</em> I engineer with
          </h2>
        </div>

        <div className="cap-grid">
          {pods.map((pod) => (
            <div className="cap-card" key={pod.index}>
              <div className="cap-index">{pod.index}</div>
              <h3>{pod.title}</h3>
              <p className="cap-desc">{pod.desc}</p>
              <div className="cap-chips">
                {pod.chips.map((c) => (
                  <span className="chip" key={c}>
                    {c}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

<div className="soft-row">
      <h3 className="soft-title">Technical Skills</h3>
      <div className="skill-logos">
        {techSkills.map((s) => (
          <div className="skill-logo" key={s.label}>
            <i className={s.icon}></i>
            <p>{s.label}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="soft-row">
      <h3 className="soft-title">Soft Skills</h3>
      <div className="soft-list">
        {softSkills.map((s) => (
          <div className="soft-skill" key={s.label}>
            <i className={s.icon}></i>
            <p>{s.label}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="attr-row">
      {attributes.map((a) => (
        <span className="attr-chip" key={a}>
          <span className="tick">✓</span>
          {a}
        </span>
      ))}
    </div>
  </div>
</section>
);
}

export default Capabilities;
