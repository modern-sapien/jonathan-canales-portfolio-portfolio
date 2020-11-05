import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Project from "../../components/Project/Project";

const groceries = [
  {
    id: 1,
    name: "Milk",
    purchased: true,
  },
  {
    id: 2,
    name: "Eggs",
    purchased: true,
  },
  {
    id: 3,
    name: "Cheese",
    purchased: false,
  },
  {
    id: 4,
    name: "Cake Mix",
    purchased: false,
  },
  {
    id: 5,
    name: "Carrots",
    purchased: false,
  },
  {
    id: 6,
    name: "Juice",
    purchased: true,
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
              <div className="row content"> </div>
              <h3 className="text-light ">Project Gallery</h3>
              <div className="row text-light mt-4">
                <Project groceries={groceries} />
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
