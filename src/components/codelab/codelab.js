import React, {Component, PropTypes} from 'react';
import Title from './title';
import Toc from './toc';
import {fetchSteps} from '../../redux/actions/codelab';

export default class Codelab extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    steps: PropTypes.array.isRequired,
    selected: PropTypes.object.isRequired,
    fetch: PropTypes.func.isRequired
  };

  static needs = [fetchSteps];

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    return (
      <div>
        <Title/>
        <div className="container doc">
          <div className="doc-content">
            {this.props.children}
          </div>
          <Toc steps={this.props.steps} selected={this.props.selected}/>
        </div>
      </div>
    );
  }
}
