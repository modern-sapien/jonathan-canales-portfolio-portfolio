import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Project from "../../components/Project/Project";

import EmployeeDirectoryImg from "../../images/employee-directory.png";
import PersonaGenImg from "../../images/persona-gen.png";
import NoteTakerImg from "../../images/note-taker.png";
import QuizGameImg from "../../images/quiz-game-screenshot.png";
import WeatherDashImg from "../../images/weather-dash-display.png";

console.log(EmployeeDirectoryImg);

const projects = [
  {
    id: 1,
    name: "Employee Directory",
    img: EmployeeDirectoryImg,
    git: "https://github.com/modern-sapien/react-employee-directory",
    deployed: "https://modern-sapien.github.io/react-employee-directory/",
  },
  {
    id: 2,
    name: "Persona Generator",
    img: PersonaGenImg,
    git: "https://github.com/modern-sapien/personaGen",
    deployed: "https://modern-sapien.github.io/personaGen/",
  },
  {
    id: 3,
    name: "Note Taker",
    img: NoteTakerImg,
    git: "https://github.com/modern-sapien/express-homework-note-taker1",
    deployed: "https://express-note-taker-move.herokuapp.com/notes",
  },
  {
    id: 4,
    name: "Quiz Game",
    img: QuizGameImg,
    git: "https://github.com/modern-sapien/javascript-quiz-project",
    deployed: "https://modern-sapien.github.io/javascript-quiz-project/",
  },
  {
    id: 5,
    name: "Weather Dash",
    img: WeatherDashImg,
    git: "https://github.com/modern-sapien/weather-dashboard-forecaster",
    deployed: "https://modern-sapien.github.io/weather-dashboard-forecaster/",
  },
  {
    id: 6,
    name: "PWA Budget App",
    img: WeatherDashImg,
    git: "https://github.com/modern-sapien/weather-dashboard-forecaster",
    deployed: "https://pwa-budget-tracking.herokuapp.com/",
  },
];

const Portfolio = () => {
  return (
    <>
      {/* <div className="card pb-3 mt-5" style={{ width: "18rem" }}>
        <img src={WeatherDashImg} style={{ width: "200px" }} />
        <div className="card-body ">
          <h5>Hello There</h5>
          <p className="card-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,
            dolores vitae temporibus quae quisquam, est dicta eligendi ve
          </p>
          <a href="dead" class="btn btn-primary">
            Button
          </a>
        </div>
      </div> */}
 
      <div id="info" className="row py-3 container bg-transparent">
          <div className="row mt-5">
              <h3 className="text-light col-12">Project Gallery</h3>
                <Project projects={projects} />
          </div>
          </div>
    </>
  );
};

export default Portfolio;
