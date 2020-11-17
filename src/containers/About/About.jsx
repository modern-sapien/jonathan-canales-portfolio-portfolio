import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import VrBackground from "../../components/VrBackground/VrBackground";
import AboutPhoto from "./home-canales.png";

const About = () => {
  return (
    <>
      <VrBackground className="background"/>
      <div id="info" className="bg-transparent row mt-3" >
                <div className="col-sm-6 col-md-6 mt-3 d-flex justify-content-center">
                  {/* <img
                    src={AboutPhoto}
                    className="image-container mx-5"
                    alt="A young developer smiles back at you."
                  /> */}
                </div>
                <div className="col-sm-6 col-md-4  text-light py-3 content">
                  <p> I’m a driven and bold Full Stack Developer, UX Designer &
                    Researcher that is passionate about solving problems through
                    intentional processes.
                    </p>
                  <p> I believe in rapid prototyping, design sprints, asking questions and learning through teaching. 
                    </p>

                    <div className="btn btn-light modern-sapien-btn col-12" id="projects-button"> PROJECTS</div>
                 </div>
                 
            </div>  
            
    </>
  );
};

export default About;
