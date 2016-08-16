import {pick} from 'lodash';
import React, {Component, PropTypes} from 'react';
import Title from './title';
import Tagline from './tagline';
import WhatItIs from './whatitis';
import Usage from './usage';
import Options from './options';
import {fetchOptions} from '../../redux/actions/home';

export default class Home extends Component {
  static propTypes = {
    options: PropTypes.array.isRequired,
    selection: PropTypes.array.isRequired,
    select: PropTypes.func.isRequired,
    fetch: PropTypes.func.isRequired
  };

  static needs = [fetchOptions];

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const optionsProps = pick(this.props, 'options', 'selection', 'select');
    return (
      <div>
        <Title/>
        <Tagline/>
        <WhatItIs/>
        <Usage/>
        <Options {...optionsProps}/>
      </div>
    );
  }
}
