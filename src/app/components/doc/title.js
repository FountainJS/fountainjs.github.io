import React, {Component} from 'react';

export default class Title extends Component {
  render() {
    return (
      <div className="title">
        <div className="container">
          <div className="title-text">
            <h1 className="title-text-title">
              Fountain Documentation
            </h1>
          </div>
          <div className="title-logo small">
            <img src="/assets/imgs/foutainjs-logo6-large-noback-machine.png"/>
          </div>
        </div>
      </div>
    );
  }
}
