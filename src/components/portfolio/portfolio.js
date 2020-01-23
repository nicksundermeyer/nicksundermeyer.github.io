import React from "react";
import Modal from "./portfolio-modal";
import portfolioData from "./portfolioData";
import "./portfolio.css";

const categories = [
  "Game Development",
  "3D Work",
  "Graphic Design",
  "Web Development"
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          {categories.map(category => {
            return (
              <div className="portfolio-wrapper bgrid-quarters s-bgrid-thirds cf">
                <h3>{category}</h3>
                {portfolioData.map((e, i) => {
                  if (portfolioData[i].categories === category) {
                    return (
                      <Modal portfolioData={portfolioData[i]} modalID={i} />
                    );
                  } else {
                    return null;
                  }
                })}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
