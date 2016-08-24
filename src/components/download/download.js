import {pick} from 'lodash';
import React, {Component, PropTypes} from 'react';
import Title from './title';
import Options from './options';
import {fetchOptions} from '../../redux/actions/options';

export default class Download extends Component {
  static propTypes = {
    options: PropTypes.array.isRequired,
    selection: PropTypes.array.isRequired,
    releases: PropTypes.array.isRequired,
    select: PropTypes.func.isRequired,
    fetch: PropTypes.func.isRequired
  };

  static needs = [fetchOptions];

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const optionsProps = pick(this.props, 'options', 'selection', 'select', 'releases');
    return (
      <div>
        <Title/>
        <Options {...optionsProps}/>
      </div>
    );
  }
}
