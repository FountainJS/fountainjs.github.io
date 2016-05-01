import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

export default class Toc extends Component {
  static propTypes = {
    docs: PropTypes.array.isRequired,
    selected: PropTypes.object.isRequired
  };

  liClassName(doc) {
    const classes = ['doc-toc-item'];
    if (doc === this.props.selected) {
      classes.push('active');
    }
    return classes.join(' ');
  }

  render() {
    return (
      <ul className="doc-toc">
        {this.props.docs.map((doc, i) => (
          <li key={i} className={this.liClassName(doc)}>
            <Link to={`/doc/${doc.path}`}>
              {doc.title}
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}
