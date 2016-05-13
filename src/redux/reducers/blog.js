import {REQUEST_POSTS, RECEIVE_POSTS, REQUEST_POST_CONTENT, RECEIVE_POST_CONTENT} from '../actions/blog';
import marked from 'marked';

const initialState = {
  posts: [],
  postsContent: [],
  loading: false,
  loadingPost: false
};

export default function blog(state = initialState, action) {
  switch (action.type) {
    case REQUEST_POSTS: {
      return {...state, loading: true};
    }
    case RECEIVE_POSTS: {
      return {...state, posts: action.posts, loading: false};
    }
    case REQUEST_POST_CONTENT: {
      return {...state, loadingPost: true};
    }
    case RECEIVE_POST_CONTENT: {
      const postsContent = state.postsContent.concat([{
        file: action.file, content: marked(action.content)
      }]);
      return {...state, postsContent, loadingPost: false};
    }
    default: {
      return state;
    }
  }
}
