import React, {Component} from 'react';
import {Link} from 'react-router';

export class Header extends Component {
  render() {
    return (
      <header>
        <p className="header-title">
          <Link to="/">
            Yeoman Fountain generators
          </Link>
        </p>
        <p className="header-links">
          <Link to="/download">
            Download
          </Link>
          <Link to="/doc">
            Documentation
          </Link>
          <a target="_blank" href="http://yeoman.io/codelab/">
            Codelab
          </a>
          <Link to="/blog">
            Blog
          </Link>
          <a className="header-social" href="https://github.com/FountainJS/generator-fountain-webapp">
            <img alt="GitHub Link" src="/assets/imgs/social-github.svg"/>
          </a>
          <a className="header-social" href="https://twitter.com/yeomanfountain">
            <img alt="Twitter Link" src="/assets/imgs/social-twitter.svg"/>
          </a>
          <a className="header-social" href="http://slackin.fountainjs.io">
            <img alt="Slack Link" src="/assets/imgs/social-slack.png"/>
          </a>
        </p>
      </header>
    );
  }
}
