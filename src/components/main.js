import React, {Component, PropTypes} from 'react';
import {Header} from './header';
import {Footer} from './footer';

export default class Main extends Component {
  render() {
    return (
      <div className="main-container">
        <Header/>
        <main className="main-main">
          {this.props.children}
        </main>
        <Footer/>
      </div>
    );
  }
}

Main.propTypes = {
  children: PropTypes.element.isRequired
};
