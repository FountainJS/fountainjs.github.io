import React, {Component} from 'react';

export default class Title extends Component {
  render() {
    return (
      <div className="title">
        <div className="container">
          <div className="title-text">
            <h1 className="title-text-title">
              One Yeoman generator for all your frontend projects
            </h1>
            <iframe src="https://ghbtns.com/github-btn.html?user=FountainJS&repo=generator-fountain-webapp&type=star&count=true&size=large" frameBorder="0" scrolling="0" width="160px" height="30px"></iframe>
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
