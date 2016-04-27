import React, {Component} from 'react';
import {Link} from 'react-router';

export class Header extends Component {
  render() {
    return (
      <header>
        <p className="header-title">
          <a href="https://github.com/FountainJS/generator-fountain-webapp" target="_blank">
            Yeoman Foutain generators
          </a>
        </p>
        <p className="header-links">
          <Link to="/">
            Home
          </Link>
          <Link to="/doc">
            Documentation
          </Link>
          <Link to="/blog">
            Blog
          </Link>
        </p>
      </header>
    );
  }
}
