import {RECEIVE_POSTS, RECEIVE_POST_CONTENT} from '../actions/blog';
import marked from 'marked';

const initialState = {
  posts: [],
  postsContent: []
};

export default function home(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_POSTS: {
      return {...state, posts: action.posts};
    }
    case RECEIVE_POST_CONTENT: {
      const postsContent = state.postsContent.concat([{
        file: action.file, content: marked(action.content)
      }]);
      return {...state, postsContent};
    }
    default: {
      return state;
    }
  }
}
