import {pick} from 'lodash';
import React, {Component, PropTypes} from 'react';
import Title from './title';
import Usage from './usage';
import Options from './options';

export default class Home extends Component {
  render() {
    const optionsProps = pick(this.props, 'options', 'selection', 'select');
    return (
      <div>
        <Title/>
        <Usage/>
        <Options {...optionsProps}/>
      </div>
    );
  }
}

Home.propTypes = {
  options: PropTypes.array.isRequired,
  selection: PropTypes.array.isRequired,
  select: PropTypes.func.isRequired
};
