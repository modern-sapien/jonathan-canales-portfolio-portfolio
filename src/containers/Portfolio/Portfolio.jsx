import React from "react";
import Project from "../../components/Project/Project";
import EmployeeDirectoryImg from "../../images/employee-directory.png";
import PersonaGenImg from "../../images/persona-gen.png";
import NoteTakerImg from "../../images/note-taker.png";
import QuizGameImg from "../../images/quiz-game-screenshot.png";
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
    git: "https://github.com/modern-sapien/OnlyDungeons2",
    deployed: "https://onlydungeons.herokuapp.com/",
  },
  {
    id: 2,
    name: "Employee Directory",
    img: EmployeeDirectoryImg,
    git: "https://github.com/modern-sapien/OnlyDungeons2",
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
    <VrBackground className="background"/>


    <div id="info" className>
    <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel"> 
    {/* <ol className="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
  </ol> */}
  <div className="carousel-inner">



    <div className="carousel-item active">
      <img src={QuizGameImg} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </div>
    </div>

    <div id="info" className="row py-3 bg-transparent">
          <div className="row mt-5">
              <h3 className="text-light col-12">Project Gallery</h3>
                <Project projects={projects} />
          </div>
          </div>


    <div className="carousel-item">
      <img src={OnlyDungeonsImg} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>



    <div className="carousel-item">
      <img src={PersonaGenImg} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>



    
    </div>

    </>
  );
};

export default Portfolio;
