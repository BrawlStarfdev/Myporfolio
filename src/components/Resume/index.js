import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import Pdf from "../../assets/resume/Thomas_Dev.pdf";
import Loader from "react-loaders";
import "./index.scss";

const Resume = () => {
  const [numPages, setNumPages] = useState(0);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <>
      <div className="page-container-resume">
        <div className="donwloadform">
          <a href={Pdf} className="contact-infor" download={true}>
            donwnload Resume
          </a>
        </div>
        <Document file={Pdf} onLoadSuccess={onDocumentLoadSuccess}>
          {Array.from(new Array(numPages), (el, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              width={window.innerHeight}
              height={window.innerHeight}
              renderAnnotationLayer={false}
              renderTextLayer={false}
            />
          ))}
        </Document>
      </div>

      <Loader type="ball-grid-pulse" />
    </>
  );
};

export default Resume;
