import React from "react";
import { LINKS } from "../links";

const experience = [
  {
    role: "Frontend Developer",
    company: "Tech Group",
    meta: "Remote · 01/2024 – Present",
    points: [
      "Designed and developed responsive, SEO-friendly websites for small businesses.",
      "Built modern UI components using React, JavaScript, HTML, and CSS.",
      "Optimized website performance, reducing load times by up to 30%.",
      "Improved accessibility and cross-device compatibility.",
      "Integrated with RESTful APIs and backend services.",
      "Collaborated with design and product teams to deliver user-friendly features.",
    ],
  },
];

const certs = [
  {
    org: "ALX Africa Software Engineering Program",
    meta: "08/2023 – Present",
    points: [
      "Hands-on experience in full-stack development — Git, C, Python, Bash scripting, and MySQL.",
      "Built an Airbnb Clone using Python & MySQL.",
    ],
    link: LINKS.certificates.alx,
  },
  {
    org: "Meta Front-End Developer Professional Certificate",
    meta: "06/2022 – Present",
    points: [
      "Created responsive web applications using HTML, CSS, JavaScript, Bootstrap, and React.",
      "Learned Git, GitHub version control, and problem-solving strategies.",
      "Built portfolio-ready projects and prepared for coding interviews.",
    ],
    link: LINKS.certificates.meta,
  },
];

const projects = [
  {
    name: "E-commerce Website",
    meta: LINKS.projects.ecommerce,
    points: [
      "Fully responsive e-commerce platform with React, HTML, CSS, and JavaScript.",
      "User authentication, shopping cart functionality, and optimized SEO.",
    ],
  },
  {
    name: "Pizza Restaurant Website",
    meta: LINKS.projects.restaurant,
    points: [
      "Interactive, one-page restaurant website using React.",
      "Improved navigation and UI/UX for a seamless user experience.",
    ],
  },
  {
    name: "Travel Website",
    meta: LINKS.projects.travelize,
    points: [
      "React-based travel platform — user login, dynamic map, journey planning, and a blog section.",
      "Hotel recommendations and a travel community for user interaction.",
    ],
  },
];

const skillGroups = [
  {
    group: "Programming Languages",
    skills: ["Java", "Python"],
  },
  {
    group: "Web Development",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript / TypeScript",
      "Bootstrap",
      "NPM / Yarn",
      "Rest API / GraphQL",
      "React / Redux",
    ],
  },
  {
    group: "Version Control",
    skills: ["Git", "GitHub"],
  },
  {
    group: "UI / UX Design",
    skills: ["Figma", "Photoshop"],
  },
  {
    group: "Soft Skills",
    skills: [
      "Problem-Solving",
      "Teamwork & Collaboration",
      "Quick Learner",
      "Attention to Detail",
      "Time Management",
      "Good Learning Mindset",
      "Good Communication",
    ],
  },
];

function Resume() {
  return (
    <section className="resume-page" id="resume">
      <div className="container">
        <div className="resume-card">
          <div className="resume-head">
            <div>
              <h1 className="resume-name">Fam Ashraf Soliman Siha</h1>
              <span className="resume-role">Frontend Web Developer</span>
            </div>
            <a
              className="btn btn-primary"
              href={LINKS.resume}
              target="_blank"
              rel="noreferrer"
            >
              Download PDF ↓
            </a>
          </div>

          <div className="resume-contact">
            <span>Egypt, Assiut</span>
            <span>•</span>
            <a href={LINKS.phone}>+201010145972</a>
            <span>•</span>
            <a href={LINKS.email}>famashraf9@gmail.com</a>
            <span>•</span>
            <a href={LINKS.linkedin} target="_blank" rel="noreferrer">
              linkedin.com/in/fam-ashraf
            </a>
          </div>

          <div className="resume-section">
            <h3>About</h3>
            <p>
              Passionate Frontend Developer with experience in building modern,
              responsive web applications using React, JavaScript, and UI/UX
              best practices. Skilled in creating user-friendly interfaces,
              optimizing web performance, and collaborating with teams to
              deliver high-quality products. Strong problem-solving abilities
              with a focus on clean, maintainable code.
            </p>
          </div>

          <div className="resume-section">
            <h3>Work Experience</h3>
            {experience.map((e) => (
              <div className="resume-item" key={e.role}>
                <div className="resume-item-head">
                  <h4>{e.role}</h4>
                  <span className="resume-meta">{e.company} · {e.meta}</span>
                </div>
                <ul>
                  {e.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="resume-section">
            <h3>Professional Certificates</h3>
            {certs.map((c) => (
              <div className="resume-item" key={c.org}>
                <a href={c.link} target="_blank" rel="noreferrer">
                  <h4>{c.org}</h4>
                </a>
                <span className="resume-meta">{c.meta}</span>
                <ul>
                  {c.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="resume-section">
            <h3>Education</h3>
            <div className="resume-item">
              <div className="resume-item-head">
                <h4>Bachelor Degree in Computer Science</h4>
                <span className="resume-meta">Asyut University · 2019 – 2023</span>
              </div>
              <span className="resume-grade">
                Grade: Very Good — CGPA: 3.1
              </span>
            </div>
          </div>

          <div className="resume-section">
            <h3>Latest Projects</h3>
            {projects.map((p) => (
              <div className="resume-item" key={p.name}>
                <h4>{p.name}</h4>
                <ul>
                  {p.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="resume-section">
            <h3>Skills</h3>
            <div className="resume-skills">
              {skillGroups.map((s) => (
                <div className="resume-skill-group" key={s.group}>
                  <div className="resume-skill-label">{s.group}</div>
                  <div className="resume-skill-chips">
                    {s.skills.map((sk) => (
                      <span className="chip" key={sk}>
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="resume-actions">
            <a
              className="btn btn-primary"
              href={LINKS.resume}
              target="_blank"
              rel="noreferrer"
            >
              Download PDF ↓
            </a>
            <a className="btn btn-ghost" href="#contact">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
