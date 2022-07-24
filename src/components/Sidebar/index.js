import "./index.scss";
import LogoS from "../../assets/images/logo-t.png";
import codechefLogo from "../../assets/images/codechef.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faHome,
  faUser,
  faEnvelope,
  faScrewdriverWrench,
  faFilePdf,
  faRectangleList,
} from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="nav-bar">
        <Link className="logo" to="/">
          <img src={LogoS} alt="Logo" />
        </Link>
        <nav>
          <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          </NavLink>
          <NavLink activeclassname="active" className="about-link" to="/about">
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
          </NavLink>

          <NavLink
            activeclassname="active"
            className="skills-link"
            to="/skills"
          >
            <FontAwesomeIcon icon={faScrewdriverWrench} color="#4d4d4e" />
          </NavLink>
          <NavLink
            activeclassname="active"
            className="about-experience"
            to="/experience"
          >
            <FontAwesomeIcon icon={faRectangleList} color="#4d4d4e" />
          </NavLink>

          <NavLink
            activeclassname="active"
            className="contact-link"
            to="/contact"
          >
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
          </NavLink>
          <NavLink
            activeclassname="active"
            className="resume-link"
            to="/resume"
          >
            <FontAwesomeIcon icon={faFilePdf} color="#4d4d4e" />
          </NavLink>
        </nav>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/thomas-lin-a1bb79191/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} color="#b9b9b9" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/FullStackEngineer-thomas"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} color="#b9b9b9" />
            </a>
          </li>
          {/* <li>
            <a
              href="https://www.codechef.com/users/metal_oopa"
              target="_blank"
              rel="noreferrer"
            >
              <img src={codechefLogo} width="24" alt="Codechef" />
            </a>
          </li> */}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
