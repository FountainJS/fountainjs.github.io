import React, {Component, PropTypes} from 'react';
import Title from './title';

export default class Doc extends Component {
  render() {
    return (
      <div>
        <Title/>
        content
      </div>
    );
  }
}

Doc.propTypes = {
  params: PropTypes.object.isRequired
};

Doc.index = 'data/docs.json';
