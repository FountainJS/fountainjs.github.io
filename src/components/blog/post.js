/* eslint "react/no-danger": 0 */

import React, {Component, PropTypes} from 'react';
import {fetchPosts, fetchPostContent} from '../../redux/actions/blog';

export default class Post extends Component {
  static propTypes = {
    post: PropTypes.object.isRequired,
    content: PropTypes.string.isRequired,
    fetchPosts: PropTypes.func.isRequired,
    fetch: PropTypes.func.isRequired
  };

  static index = {post: 'data/posts.json'};

  static needs = [fetchPosts, fetchPostContent];

  componentDidMount() {
    this.fetch(this.props);
  }

  componentWillUpdate(props) {
    this.fetch(props);
  }

  fetch(props) {
    props.fetchPosts();
    props.fetch(props.post.file);
  }

  render() {
    return (
      <div>
        <h1>{this.props.post.title}</h1>
        <div dangerouslySetInnerHTML={{__html: this.props.content}}/>
      </div>
    );
  }
}
