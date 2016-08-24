import React, {Component} from 'react';

export default class Title extends Component {
  render() {
    return (
      <div className="title">
        <div className="container">
          <div className="title-text">
            <h1 className="title-text-title">
              You can download your seed project right here
            </h1>
          </div>
          <div className="title-logo">
            <div className="title-logo-container">
              <img alt="Fountain Logo" src="/assets/imgs/artworks/fountainjs-logo6-machine.png"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
