import React, { useState } from "react";
import { LINKS } from "../links";

function Contact({ id }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Inquiry noted — I'll get back to you shortly.");
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setStatus(""), 5000);
  };

  const meta = [
    {
      k: "Email",
      v: "famashraf9@gmail.com",
      href: LINKS.email,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      ),
    },
    {
      k: "Time Zone",
      v: "Assiut, Egypt · UTC+2",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      ),
    },
    {
      k: "Phone",
      v: "+20 1010145972",
      href: LINKS.phone,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.4 2.1L8.1 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.6 2Z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="section" id={id}>
      <div className="container">
        <div className="section-head reveal">
          <span className="section-tag">{"//"} 06 — Inquiries</span>
          <h2 className="section-title">
            Let's build something <em>worth remembering</em>
          </h2>
        </div>

        <div className="contact-grid">
          <div className="contact-meta">
            <div className="perspective-body">
              <p>
                Have a project, a collaboration, or a role in mind? I'm always
                open to select engagements and thoughtful conversations about
                frontend engineering, spatial web, and applied AI.
              </p>
            </div>

            {meta.map((m) => (
              <div className="meta-item" key={m.k}>
                <div className="meta-ico">{m.icon}</div>
                <div>
                  <div className="k">{m.k}</div>
                  {m.href ? (
                    <a href={m.href} className="v">
                      {m.v}
                    </a>
                  ) : (
                    <div className="v">{m.v}</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="field">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="field">
              <label htmlFor="message">Project Concept / Message</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Send Inquiry <span aria-hidden="true">→</span>
            </button>

            {status && <div className="form-status">{status}</div>}

            <div className="form-social">
              <a href={LINKS.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={LINKS.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href={LINKS.email}>Email</a>
              <a href={LINKS.portfolio} target="_blank" rel="noreferrer">
                Portfolio ↗
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
