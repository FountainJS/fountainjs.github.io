import React, {Component, PropTypes} from 'react';
import Title from './title';

export default class Blog extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    return (
      <div>
        <Title/>
        <div className="container blog">
          {this.props.children}
        </div>
      </div>
    );
  }
}
