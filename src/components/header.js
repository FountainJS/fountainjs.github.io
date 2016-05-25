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
          <Link to="/doc">
            Documentation
          </Link>
          <Link to="/gulp-angular">
            gulp-angular
          </Link>
          <Link to="/blog">
            Blog
          </Link>
          <a className="header-social" href="https://github.com/FountainJS/generator-fountain-webapp">
            <img src="/assets/imgs/social-github.svg"/>
          </a>
          <a className="header-social" href="https://twitter.com/yeomanfountain">
            <img src="/assets/imgs/social-twitter.svg"/>
          </a>
          <a className="header-social" href="https://fountain-slack.herokuapp.com">
            <img src="/assets/imgs/social-slack.png"/>
          </a>
        </p>
      </header>
    );
  }
}
