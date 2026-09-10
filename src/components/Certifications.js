import React, { useState } from "react";
import { LINKS } from "../links";

const companies = [
  {
    key: "alx",
    name: "ALX",
    logo: LINKS.certificateImages.alx,
    lightLogo: true,
    certs: [
      {
        course: "Software Engineering Program",
        image: require("../images/alx-cer.JPG"),
        link: LINKS.certificates.alx,
        desc: "Full-stack software engineering foundations — problem solving, C, Python, and web stack fundamentals.",
      },
    ],
  },
  {
    key: "meta",
    name: "Meta",
    logo: LINKS.certificateImages.meta,
    certs: [
      {
        course: "Meta Front-End Developer",
        image: require("../images/meta-cer1.JPG"),
        link: "https://www.coursera.org/account/accomplishments/specialization/certificate/FK4N2BWMD5IR",
        desc: "Specialization covering the complete front-end development process.",
      },
      {
        course: "Introduction to Front-End Development",
        image: require("../images/meta-cer2.JPG"),
        link: "https://coursera.org/verify/W7SSDBGZU2UW",
        desc: "Create and style a webpage with HTML and CSS; the benefits of UI frameworks.",
      },
      {
        course: "Programming with JavaScript",
        image: require("../images/meta-cer3.JPG"),
        link: "https://coursera.org/verify/9J2XQNH5UWF6",
        desc: "Creating and manipulating objects and arrays, plus unit tests with Jest.",
      },
      {
        course: "Version Control",
        image: require("../images/meta-cer4.JPG"),
        link: "https://coursera.org/verify/85UL5X8DZKBQ",
        desc: "Navigate and configure Git via the command line and manage code revisions.",
      },
      {
        course: "HTML and CSS in depth",
        image: require("../images/meta-cer5.JPG"),
        link: "https://coursera.org/verify/ZRRCQXSMG9SN",
        desc: "Responsive layouts with HTML5 and CSS, Bootstrap UIs and debugging tools.",
      },
      {
        course: "React Basics",
        image: require("../images/meta-cer6.JPG"),
        link: "https://coursera.org/verify/BCGESS6DBV8C",
        desc: "Reusable components, props, forms, and dynamic interactive pages in React.",
      },
      {
        course: "Advanced React",
        image: require("../images/meta-cer7.JPG"),
        link: "https://coursera.org/verify/FMJC47RGWTJC",
        desc: "Advanced patterns, API integration, and testing with React Testing Library.",
      },
      {
        course: "Principles of UX/UI Design",
        image: require("../images/meta-cer8.JPG"),
        link: "https://coursera.org/verify/QCFM2FA8PATP",
        desc: "User empathy research, accessibility, wireframes and prototypes in Figma.",
      },
      {
        course: "Front-End Developer Capstone",
        image: require("../images/meta-cer9.JPG"),
        link: "https://coursera.org/verify/KLKTJ7VKMW9Z",
        desc: "Built a complete React application from planning to Git-managed delivery.",
      },
      {
        course: "Coding Interview Preparation",
        image: require("../images/meta-cer10.JPG"),
        link: "https://www.coursera.org/account/accomplishments/verify/P2GM3RDFHCF2",
        desc: "Computer science fundamentals and strategies for successful interviews.",
      },
    ],
  },
  {
    key: "google",
    name: "Google",
    logo: LINKS.certificateImages.google,
    lightLogo: true,
    certs: [
      {
        course: "Foundations of User Experience (UX) Design",
        image: require("../images/google-cer1.jpg"),
        link: "",
        desc: "UX fundamentals — user-centered thinking and the design lifecycle.",
      },
      {
        course: "Start the UX Design Process: Empathize, Define, and Ideate",
        image: require("../images/google-cer2.jpg"),
        link: "",
        desc: "Empathy research, problem definition, and ideation techniques.",
      },
    ],
  },
  {
    key: "ibm",
    name: "IBM",
    logo: LINKS.certificateImages.ibm,
    lightLogo: true,
    certs: [
      {
        course: "Introduction to Cloud Computing",
        image: require("../images/ibm-cer1.JPG"),
        link: "https://www.coursera.org/account/accomplishments/certificate/RHR6JPWXBU6X",
        desc: "Cloud characteristics, pay-as-you-go benefits, and cloud service providers.",
      },
      {
        course: "Introduction to Web Development with HTML, CSS, JavaScript",
        image: require("../images/ibm-cer2.JPG"),
        link: "https://www.coursera.org/account/accomplishments/certificate/GQDN34HGFN8J",
        desc: "What developing a website or cloud app involves, end to end.",
      },
      {
        course: "Getting Started with Git and GitHub",
        image: require("../images/ibm-cer3.jpg"),
        link: "https://www.coursera.org/account/accomplishments/certificate/YUS579RHWYXC",
        desc: "Distributed version control, repos, and GitHub collaboration workflows.",
      },
      {
        course: "Developing Cloud Native Applications",
        image: require("../images/ibm-cer4.jpg"),
        link: "https://www.coursera.org/account/accomplishments/certificate/YMQB25BMZN9S",
        desc: "Cloud-native concepts, hybrid infrastructure, and CI/CD release patterns.",
      },
      {
        course: "Developing Cloud Apps with Node.js and React",
        image: require("../images/ibm-cer5.jpg"),
        link: "https://www.coursera.org/account/accomplishments/certificate/CW45TXVPH2NH",
        desc: "Node.js web servers, async callbacks, and React integration.",
      },
    ],
  },
];

function Certifications() {
  const [companyIdx, setCompanyIdx] = useState(0);
  const [certIdx, setCertIdx] = useState(0);

  const company = companies[companyIdx];
  const cert = company.certs[certIdx];
  const total = company.certs.length;

  function selectCompany(i) {
    setCompanyIdx(i);
    setCertIdx(0);
  }

  function move(delta) {
    setCertIdx((prev) => (prev + delta + total) % total);
  }

  return (
    <section className="section section-alt">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-tag">{"//"} 03 — Industry Validations</span>
          <h2 className="section-title">
            Institutional <em>foundations</em>
          </h2>
        </div>

        <div className="cert-tabs reveal">
          {companies.map((c, i) => (
            <button
              key={c.key}
              className={`cert-tab ${i === companyIdx ? "active" : ""} ${
                c.lightLogo ? "light" : ""
              }`}
              onClick={() => selectCompany(i)}
              aria-pressed={i === companyIdx}
            >
              <span className="cert-tab-logo">
                <img src={c.logo} alt={`${c.name} logo`} />
              </span>
              <span className="cert-tab-name">{c.name}</span>
              <span className="cert-tab-count">{c.certs.length}</span>
            </button>
          ))}
        </div>

        <div className="cert-viewer reveal" key={company.key}>
          <div className="cert-stage">
            <div className="cert-frame">
              <img src={cert.image} alt={cert.course} loading="lazy" />
              <div className="cert-frame-glow"></div>
            </div>
            {total > 1 && (
              <>
                <button
                  className="cert-arrow prev"
                  onClick={() => move(-1)}
                  aria-label="Previous certificate"
                >
                  ←
                </button>
                <button
                  className="cert-arrow next"
                  onClick={() => move(1)}
                  aria-label="Next certificate"
                >
                  →
                </button>
              </>
            )}
          </div>

          <div className="cert-info">
            <span className="cert-org">{company.name}</span>
            <h3>{cert.course}</h3>
            <p>{cert.desc}</p>

            <div className="cert-counter">
              {String(certIdx + 1).padStart(2, "0")}
              <span>/ {String(total).padStart(2, "0")}</span>
            </div>

            {cert.link ? (
              <a
                className="btn btn-primary"
                href={cert.link}
                target="_blank"
                rel="noreferrer"
              >
                View Credential <span aria-hidden="true">↗</span>
              </a>
            ) : (
              <span className="cert-pending">Credential link coming soon</span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certifications;