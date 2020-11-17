import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import VrBackground from "../../components/VrBackground/VrBackground";
import AboutPhoto from "./home-canales.png";

const About = () => {
  return (
    <>
      <VrBackground className="background"/>
      <div id="info" className="bg-transparent content row mt-3" >
                <div className="col-sm-6 col-md-4 mt-3">
                  <img
                    src={AboutPhoto}
                    className="image-container mx-5"
                    alt="A young developer smiles back at you."
                  />
                </div>
                <div className="col-sm-6 col-md-4  text-light mt-5">
                  <p> I’m a driven and bold Software Developer, UX Designer &
                    Researcher that is passionate about solving problems through
                    intentional processes.
                    </p>
                    <div className="btn btn-light modern-sapien-btn col-12" id="projects-button"> PROJECTS</div>
                 </div>
                 
            </div>  
            
    </>
  );
};

export default About;
