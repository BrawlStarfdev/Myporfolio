import { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import WordCloud from "./wordcloud";

const Skills = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  const skillsArray = "Skills".split("");

  // setTimer for animation delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className=" container-skills skills-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={skillsArray}
              idx={15}
            />
            <br />
          </h1>
          <p>
            I am comfortable with several types of coding languages <br /> I
            have the most hands-on experience working with is JavaScript.
            Because JavaScript was the first coding language I learned and I
            have used it on several projects over the past 10 years, this is the
            language I am most comfortable with
          </p>
          <p>
            Looking for a role in a company with the opportunity to work with
            the latest technologies on challenging and diverse projects.
          </p>
          <div className="skills-overview">
            <p>
              Skills:
              <br /> Languages: Javascript,Typescript,C <br /> Fronted:
              React.js, React Native, Next.js,Vue.js
              <br /> Back-end: Node.js, Express.js
              <br /> Database: Mysql, PostgreSql,MongoDB
              <br />
              API: REST,GraphQL(Apollo,Prisma)
              <br /> Server: Firebase,Aws,Heroku <br />
              Unit Testing: Cypress, Jest <br />
              Other: Twillo API, Payment Integration
            </p>
          </div>
        </div>

        <div className="tagcloud-wrap">
          <WordCloud />
        </div>
      </div>

      <Loader type="ball-grid-pulse" />
    </>
  );
};

export default Skills;
