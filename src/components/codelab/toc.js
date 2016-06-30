import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

export default class Toc extends Component {
  static propTypes = {
    steps: PropTypes.array.isRequired,
    selected: PropTypes.object.isRequired
  };

  liClassName(step) {
    const classes = ['doc-toc-item'];
    if (step === this.props.selected) {
      classes.push('active');
    }
    return classes.join(' ');
  }

  render() {
    return (
      <ul className="doc-toc">
        {this.props.steps.map((step, i) => (
          <li key={i} className={this.liClassName(step)}>
            <Link to={`/codelab/${step.path}`}>
              {step.title}
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}
