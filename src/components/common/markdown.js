/* eslint "react/no-danger": 0 */

import React, {Component, PropTypes} from 'react';
import Prism from 'prismjs';

export default class DocContent extends Component {
  static propTypes = {
    content: PropTypes.string.isRequired
  };

  render() {
    return (
      <div dangerouslySetInnerHTML={{__html: this.props.content}}/>
    );
  }
}
