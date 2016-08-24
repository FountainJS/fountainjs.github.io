/* eslint "react/no-danger": 0 */

import _ from 'lodash';
import React, {Component, PropTypes} from 'react';
import OptionValue from './option-value';
import marked from '../../marked';

export default class Option extends Component {
  description() {
    if (_.isNumber(this.props.selected)) {
      const content = this.props.values[this.props.selected].description;
      const markup = marked(content.join('\n'));

      return (
        <div className="option-description">
          <p dangerouslySetInnerHTML={{__html: markup}}></p>
        </div>
      );
    }
    return null;
  }

  render() {
    const {selected, select, title, values, option} = this.props;
    const attributes = (value, i) => ({
      option,
      value: i,
      select,
      active: i === selected,
      ...value
    });
    return (
      <div className="option-container">
        <h3>{title}</h3>
        <div className="option-section">
          <div className="option-bloc-container">
            <div className="option-bloc">
              {values.map((value, i) => <OptionValue key={i} {...attributes(value, i)}/>)}
            </div>
          </div>
          {/* this.description() */}
        </div>
      </div>
    );
  }
}

Option.propTypes = {
  option: PropTypes.number.isRequired,
  selected: PropTypes.number,
  select: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  values: PropTypes.array.isRequired
};
