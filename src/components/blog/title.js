import React, {Component} from 'react';

export default class Title extends Component {
  render() {
    return (
      <div className="title">
        <div className="container">
          <div className="title-text">
            <h1 className="title-text-title">
              Fountain Blog
            </h1>
          </div>
          <div className="title-logo">
            <div className="title-logo-container small">
              <img src="/assets/imgs/artworks/fountainjs-logo6-badge.png"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
