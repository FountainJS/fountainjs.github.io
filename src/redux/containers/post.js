import _ from 'lodash';
import {connect} from 'react-redux';
import Post from '../../components/blog/post';
import {fetchPosts, fetchPostContent} from '../actions/blog';

const mapStateToProps = (state, props) => {
  const path = props.params.post || '';
  const post = _.find(state.blog.posts, {path}) || {};
  const postContent = _.find(state.blog.postsContent, {file: post.file});
  const content = postContent ? postContent.content : '';
  return {post, content};
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    fetch: post => dispatch(fetchPostContent(post))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
