import React from "react";
import Project from "../../components/Project/Project";
import EmployeeDirectoryImg from "../../images/employee-directory.png";
import PersonaGenImg from "../../images/persona-gen.png";
import Vram from "../../images/vram.png";
import WeatherDashImg from "../../images/weather-dash-display.png";
import PWABudgetImg from "../../images/pwa-budget.png";
import OnlyDungeonsImg from "../../images/only-dungeons.png"
import VrBackground from "../../components/VrBackground/VrBackground";

console.log(EmployeeDirectoryImg);

const projects = [
  {
    id: 1,
    name: "Only Dungeons",
    img: OnlyDungeonsImg,
    content: "",
    git: "https://github.com/modern-sapien/OnlyDungeons2",
    deployed: "https://onlydungeons.herokuapp.com/",
  },
  {
    id: 2,
    name: "VRAM",
    img: Vram,
    git: "https://github.com/modern-sapien/vram",
    deployed: "https://vram.herokuapp.com/",
  },
  {
    id: 3,
    name: "Persona Generator",
    img: PersonaGenImg,
    git: "https://github.com/modern-sapien/personaGen",
    deployed: "https://modern-sapien.github.io/personaGen/",
  },
  {
    id: 4,
    name: "Employee Directory",
    img: EmployeeDirectoryImg,
    git: "https://github.com/modern-sapien/OnlyDungeons2",
    deployed: "https://modern-sapien.github.io/react-employee-directory/",
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
    <VrBackground></VrBackground>
      <div id="info" className="row my-4 pb-4 bg-transparent">
          <div className="row mt-4">
              <h3 className="text-light col-12 shadow-text">Project Gallery</h3>
              <div className="row mt-2">
                <Project projects={projects} />
                </div>
          </div>
      </div>
    </>
  );
};

export default Portfolio;
