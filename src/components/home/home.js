import React, {Component} from 'react';
import Title from './title';
import Tagline from './tagline';
import WhatItIs from './whatitis';
import Usage from './usage';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Title/>
        <Tagline/>
        <WhatItIs/>
        <Usage/>
      </div>
    );
  }
}
