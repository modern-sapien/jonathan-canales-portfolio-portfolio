import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import AboutPhoto from "./home-canales.png";

const About = () => {
  return (
    <>

      <Header className="" />

      <div id="info" className="bg-transparent container pr-3">
              {/* <div className="row"> */}
                {/* <div className="col-1"></div> */}

                <div className="col-6 content mx-4">
                  <img
                    src={AboutPhoto}
                    className="image-container"
                    alt="Go straight to hell"
                  />
                </div>

                <div className="col-6 ml-2 content text-light">
                  <p> I’m a driven and bold Software Developer, UX Designer &
                    Researcher that is passionate about solving problems through
                    intentional processes.
                    </p>
                    <div className="btn btn-light modern-sapien-btn col-8" id="projects-button"> PROJECTS</div>
                 </div>
                {/* <div className="col-1"></div> */}
              {/* </div> */}
            </div>
      <Footer />
    </>
  );
};

export default About;
