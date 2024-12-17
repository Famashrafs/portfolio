import React from "react";
import coding from "../images/coding.jpg";

function About() {
  return (
    <section className="about" id="about">
      <h1 className="section-title">About</h1>
      <div className="about-content">
        <p>
          Hello, I'm <span className="highlighted">Fam Ashraf!</span><br />
          I'm a self-taught front-end developer based in Assuit, Egypt.
          I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.
          Transforming my creativity and knowledge into websites has been my passion for over a year.
          I always strive to learn about the newest technologies and frameworks.
        </p>
        <img className="coding" src={coding} alt="my pic" />
      </div>
    </section>
  );
}

export default About;
