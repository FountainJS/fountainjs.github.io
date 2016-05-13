/* eslint "react/no-danger": 0 */

import React, {Component, PropTypes} from 'react';
import {fetchDocContent} from '../../redux/actions/doc';

export default class DocContent extends Component {
  static propTypes = {
    doc: PropTypes.object.isRequired,
    content: PropTypes.string.isRequired,
    fetch: PropTypes.func.isRequired
  };

  static index = {doc: 'data/docs.json'};

  static needs = [fetchDocContent];

  componentDidMount() {
    this.fetch(this.props);
  }

  componentWillUpdate(props) {
    this.fetch(props);
  }

  fetch(props) {
    props.fetch(props.doc.file);
  }

  render() {
    return (
      <div dangerouslySetInnerHTML={{__html: this.props.content}}/>
    );
  }
}
