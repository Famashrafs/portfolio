import React from "react";
import { useEffect, useRef } from "react";
import Typed from 'typed.js';
import me from "../images/me.png"
import Resume from "../images/Fam-Ashraf-Resume.pdf"
function Home() {
  const Example = ({args_if_necessary}) => {
    const typeTarget = useRef(null);

    useEffect(() => {
      const typed = new Typed(typeTarget.current, {
        strings: [`I am a ${args_if_necessary}`],
        typeSpeed: 40,
      });

      return () => {
        typed.destroy();
      };
    }, [args_if_necessary]);

    return <span ref={typeTarget} />;
  };

  return (
    <section className="home">
        <div className="home-content">
            <h1>
                Hey! I'M  <span className="highlighted">FAM ASHRAF</span>
            </h1>
            <h2 className="highlighted">
                <Example args_if_necessary={" FRONT-END DEVELOPER"} />
            </h2>
            <button className="home-btn" onClick={() => window.location.href = "mailto:famashraf9@gmail.com"}>Hire me</button>
            <a href={Resume} download="Fam-Ashraf-Resume.pdf">
              <button className="home-btn">Download My Resume</button>
            </a>
        </div>
        <img  className="me" src={me} alt="my pic"/>
    </section>
  );
}

export default Home;