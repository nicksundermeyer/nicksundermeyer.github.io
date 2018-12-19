import React, { Component } from 'react';
// ES modules
import ReactDOMServer from 'react-dom/server';
export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.portfolioData = props.portfolioData;
  }
  render() {
    return (
      <div>
        <div className="columns portfolio-item">
          <div className="item-wrap">
            <a href={"#" + this.portfolioData.modalID} title>
              <img alt src={"images/portfolio/" + this.portfolioData.image} class="center-cropped" />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{this.portfolioData.header}</h5>
                  <p>{this.portfolioData.categories}</p>
                </div>
              </div>
              <div className="link-icon"><i className="icon-plus" /></div>
            </a>
          </div>
        </div>
        <div id={this.portfolioData.modalID} className="popup-modal mfp-hide">

          <div class="img-wrapper">
            <img className="scale-with-grid" src={"images/portfolio/modals/" + this.portfolioData.image} alt />
          </div>
          <div className="description-box">
            <h4>{this.portfolioData.header}</h4>

            <div dangerouslySetInnerHTML={{__html: ReactDOMServer.renderToString(this.portfolioData.body)}}></div>

            <span className="categories"><i className="fa fa-tag" />{this.portfolioData.categories}</span>
          </div>
          <div className="link-box">
            <a className="popup-modal-dismiss">Close</a>
          </div>
        </div>
      </div>
    );
  }
}