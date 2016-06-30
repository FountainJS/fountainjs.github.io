import React, {Component, PropTypes} from 'react';
import {fetchStepContent} from '../../redux/actions/codelab';

export default class Step extends Component {
  static propTypes = {
    step: PropTypes.object.isRequired,
    content: PropTypes.string.isRequired,
    fetch: PropTypes.func.isRequired
  };

  static index = {step: 'data/codelab.json'};

  static needs = [fetchStepContent];

  componentDidMount() {
    this.fetch(this.props);
  }

  componentWillUpdate(props) {
    this.fetch(props);
  }

  fetch(props) {
    props.fetch(props.step.file);
  }

  render() {
    return (
      <div dangerouslySetInnerHTML={{__html: this.props.content}}/> // eslint-disable-line react/no-danger
    );
  }
}
