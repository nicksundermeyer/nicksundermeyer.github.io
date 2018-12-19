import React, { Component } from 'react';
import Modal from './portfolio-modal';
import portfolioData from '../../portfolioData';
export default class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">

            <h1>Examples of My Work</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {portfolioData.map((e, i) => <Modal portfolioData={portfolioData[i]} />)}
            </div>
          </div>
        </div>
      </section>
        );
  }
}