import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Layout from "./components/Layout";
import Skills from "./components/Skills";
import Soundbar from "./components/Soundbar";
import "./App.scss";
import Resume from "./components/Resume";
import Experience from "./components/Experience";

function App() {
  return (
    <>
      <Soundbar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/experience" element={<Experience />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
