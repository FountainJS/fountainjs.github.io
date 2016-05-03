import {connect} from 'react-redux';
import Summaries from '../../components/blog/summaries';
import {fetchPosts} from '../actions/blog';

const mapStateToProps = state => {
  return {
    posts: state.blog.posts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetch: () => dispatch(fetchPosts())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Summaries);
