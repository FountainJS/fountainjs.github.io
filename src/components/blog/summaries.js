/* eslint "react/no-danger": 0 */

import _ from 'lodash';
import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {fetchPosts} from '../../redux/actions/blog';

export default class Summaries extends Component {
  static propTypes = {
    posts: PropTypes.array.isRequired,
    fetch: PropTypes.func.isRequired
  };

  static needs = [fetchPosts];

  componentDidMount() {
    if (_.isEmpty(this.props.posts)) {
      this.props.fetch();
    }
  }

  render() {
    return (
      <ul>
        {this.props.posts.map((post, i) => (
          <li key={i} className="blog-summary">
            <h2>
              <Link to={`/blog/${post.path}`}>
                {post.title}
              </Link>
            </h2>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>
    );
  }
}
