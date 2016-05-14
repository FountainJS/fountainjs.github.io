import {REQUEST_GULP_ANGULAR, RECEIVE_GULP_ANGULAR, REQUEST_GULP_ANGULAR_CONTENT, RECEIVE_GULP_ANGULAR_CONTENT} from '../actions/gulp-angular';
import marked from '../../marked';

const initialState = {
  docs: [],
  docsContent: [],
  loading: false,
  loadingDoc: false
};

export default function home(state = initialState, action) {
  switch (action.type) {
    case REQUEST_GULP_ANGULAR: {
      return {...state, loading: true};
    }
    case RECEIVE_GULP_ANGULAR: {
      return {...state, docs: action.docs, loading: false};
    }
    case REQUEST_GULP_ANGULAR_CONTENT: {
      return {...state, loadingDoc: true};
    }
    case RECEIVE_GULP_ANGULAR_CONTENT: {
      const docsContent = state.docsContent.concat([{
        file: action.file, content: marked(action.content)
      }]);
      return {...state, docsContent, loadingDoc: false};
    }
    default: {
      return state;
    }
  }
}
