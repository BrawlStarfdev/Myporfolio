import { useEffect, useState } from "react";
import Loader from "react-loaders";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const form = useRef();
  const contactArray = "Contact Me".split("");

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  return (
    <>
      <div className="container-contactpage contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={contactArray}
              idx={15}
            />
          </h1>
          <p>
            I'm always open to new opportunities!
            <br /> My past experiences have help me develop problem solving
            skills, multi-tasking abilities, and attention to detail.
          </p>
          <div className="contact_infor">
            <a href="mailto:thomaslin920@gmail.com" target="_blank">
              <p>Email: thomaslin920@gmail.com</p>
            </a>
          </div>
          <br />
          <br />
          <div className="contact_infor">
            <p>Phone: +15812004150</p>
          </div>
        </div>

        <div className="info-map">
          Thomas , 11 Ross St
          <br />
          Antigonish <br />
          Nova Scotia, <br />
          Canada
          <br />
        </div>
        <div className="map-wrap">
          <MapContainer
            center={[45.6302690680134, -62.0139458849607]}
            zoom={13}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[45.6302690680134, -62.0139458849607]}>
              <Popup>Thomas lives here, come over for a cup of coffee :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="ball-grid-pulse" />
    </>
  );
};

export default Contact;
