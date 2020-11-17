import React from "react";
import Project from "../../components/Project/Project";
import EmployeeDirectoryImg from "../../images/employee-directory.png";
import PersonaGenImg from "../../images/persona-gen.png";
import NoteTakerImg from "../../images/note-taker.png";
import QuizGameImg from "../../images/quiz-game-screenshot.png";
import WeatherDashImg from "../../images/weather-dash-display.png";
import PWABudgetImg from "../../images/pwa-budget.png";
import OnlyDungeonsImg from "../..images/only-dungeons.png"

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
    img: PWABudgetImg,
    git: "https://github.com/modern-sapien/weather-dashboard-forecaster",
    deployed: "https://pwa-budget-tracking.herokuapp.com/",
  },
];

const Portfolio = () => {
  return (
    <>
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
