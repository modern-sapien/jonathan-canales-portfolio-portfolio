import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import AboutPhoto from "./home-canales.png";

const About = () => {
  return (
    <div>
      <Header />
      <div id="info" className="container bg-transparent">
        <div className="row container">
          <div className="col-sm-12 mb-2 mt-3 card bg-transparent">
            <div className="card-body bg-tranparent">
              <div className="row">
                <div className="col-sm-1"></div>

                <div className="col-sm-4 mt-4 content">
                  <img
                    src={AboutPhoto}
                    className="image-container"
                    alt="Go straight to hell"
                  />
                </div>
                <div className="col-sm-2"></div>

                <div className="col-sm-4 content text-light">
                  <div className="row mt-5">
                    I’m a driven and bold Software Developer, UX Designer &
                    Researcher that is passionate about solving problems through
                    intentional processes.
                    <div className="btn btn-light modern-sapien-btn mt-5" id="projects-button"> PROJECTS</div>
                  </div>
                </div>
                <div className="col-sm-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
