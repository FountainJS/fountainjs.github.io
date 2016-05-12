import _ from 'lodash';
import React, {Component, PropTypes} from 'react';
import Title from './title';
import Toc from './toc';
import {fetchGulpAngular} from '../../redux/actions/gulp-angular';

export default class GulpAngular extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    docs: PropTypes.array.isRequired,
    selected: PropTypes.object.isRequired,
    fetch: PropTypes.func.isRequired
  };

  static needs = [fetchGulpAngular];

  componentDidMount() {
    if (_.isEmpty(this.props.docs)) {
      this.props.fetch();
    }
  }

  render() {
    return (
      <div>
        <Title/>
        <div className="container doc">
          <div className="doc-content">
            {this.props.children}
          </div>
          <Toc docs={this.props.docs} selected={this.props.selected}/>
        </div>
      </div>
    );
  }
}
