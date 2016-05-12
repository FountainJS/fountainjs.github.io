import React, {Component} from 'react';

export default class Title extends Component {
  render() {
    return (
      <div className="title">
        <div className="container">
          <div className="title-text">
            <h1 className="title-text-title">
              Generator gulp-angular
            </h1>
          </div>
          <div className="title-logo">
            <img src="/assets/imgs/generator-gulp-angular-logo.png"/>
          </div>
        </div>
      </div>
    );
  }
}
