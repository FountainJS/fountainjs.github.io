import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

export default class Toc extends Component {
  static propTypes = {
    docs: PropTypes.array.isRequired
  };

  render() {
    return (
      <ul className="doc-toc">
        {this.props.docs.map((doc, i) => (
          <li key={i}>
            <Link to={`/doc/${doc.path}`}>
              {doc.title}
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}
