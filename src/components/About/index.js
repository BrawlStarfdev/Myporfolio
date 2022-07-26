/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.scss";

const About = () => {
  const aboutArray = "About Me".split("");

  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="container-about about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={aboutArray}
              idx={15}
            />
          </h1>
          <p>
            My Name is Thomas Lin, I live in Antigonish which is the town in
            Antigonish Country of Nova Scotia, the eastern most province of
            Canada
          </p>
          <p>
            Thomas is a full-stack software engineer with almost two decades of
            experience in many technologies, including React, React Native, Node
            js, Firebase, and MongoDB. He can build and develop new concepts.
            Thomas loves innovating and delivering incredible products and being
            part of fabulous teams.
          </p>
          <div className="education">
            <p>Educatoin:</p>
            <p>SEP 2012 - JUN 2016</p>
            <p>
              BEIJING UNIVERSITY OF POST AND
              TELECOMMUNICATIONS-北京邮电大学计算机学院{" "}
            </p>
            <p>Bachelor's degree of Computer Science and technology</p>
          </div>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="ball-grid-pulse" />
    </>
  );
};

export default About;
