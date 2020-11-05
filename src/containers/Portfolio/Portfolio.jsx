import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Project from "../../components/Project/Project";


import EmployeeDirectoryImg from "../../images/employee-directory.png";
import PersonaGenImg from "../../images/persona-gen.png";
import NoteTakerImg from "../../images/note-taker.png";
import QuizGameImg from "../../images/quiz-game-screenshot.png";
import WeatherDashImg from "../../images/weather-dash-display.png";

console.log(EmployeeDirectoryImg)

const projects = [
  {
    id: 1,
    name: "Employee Directory",
    img: EmployeeDirectoryImg,
    git: "https://github.com/modern-sapien/react-employee-directory",
    deployed: "https://modern-sapien.github.io/react-employee-directory/"
  },
  {
    id: 2,
    name: "Persona Generator",
    img: PersonaGenImg,
    git: "https://github.com/modern-sapien/personaGen",
    deployed: "https://modern-sapien.github.io/personaGen/"
  },
  {
    id: 3,
    name: "Note Taker",
    img: NoteTakerImg,
    git: "https://github.com/modern-sapien/express-homework-note-taker1",
    deployed: "https://express-note-taker-move.herokuapp.com/notes"
  },
  {
    id: 4,
    name: "Quiz Game",
    img: QuizGameImg,
    git: "https://github.com/modern-sapien/javascript-quiz-project",
    deployed: "https://modern-sapien.github.io/javascript-quiz-project/"
  },
  {
    id: 5,
    name: "Weather Dash",
    img: WeatherDashImg,
    git: "https://github.com/modern-sapien/weather-dashboard-forecaster",
    deployed: "https://modern-sapien.github.io/weather-dashboard-forecaster/"
  },
  {
    id: 6,
    name: "PWA Budget App",
    img: WeatherDashImg,
    git: "https://github.com/modern-sapien/weather-dashboard-forecaster",
    deployed: "https://pwa-budget-tracking.herokuapp.com/"
  },
];

const Portfolio = () => {
  return (
    <div>
      <Header />
      <div id="info" className="container bg-transparent">
        <div className="row container">
          <div className="col-sm-12 mb-2 mt-3 card bg-transparent">
            <div className="card-body">
              <div className="row mt-3"> </div>
              <h3 className="text-light ">Project Gallery</h3>
              <div className="row text-light mt-4">
                <Project projects={projects} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;
