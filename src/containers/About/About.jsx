import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import VrBackground from "../../components/VrBackground/VrBackground";
import AboutPhoto from "./home-canales.png";

const About = () => {
  return (
    <>

      <VrBackground/>
      <div id="info" className="bg-transparent content container row mt-3" >
                <div className="col-sm-5 col-md-4 ml-5">
                  <img
                    src={AboutPhoto}
                    className="image-container"
                    alt="Go straight to hell"
                  />
                </div>
                <div className="col-sm-6 col-md-4 ml-5 text-light">
                  <p> I’m a driven and bold Software Developer, UX Designer &
                    Researcher that is passionate about solving problems through
                    intentional processes.
                    </p>
                    <div className="btn btn-light modern-sapien-btn col-8" id="projects-button"> PROJECTS</div>
                 </div>
            </div>
    </>
  );
};

export default About;
