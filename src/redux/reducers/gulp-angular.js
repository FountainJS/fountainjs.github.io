import {RECEIVE_GULP_ANGULAR, RECEIVE_GULP_ANGULAR_CONTENT} from '../actions/gulp-angular';
import marked from 'marked';

const initialState = {
  docs: [],
  docsContent: []
};

export default function home(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_GULP_ANGULAR: {
      return {...state, docs: action.docs};
    }
    case RECEIVE_GULP_ANGULAR_CONTENT: {
      const docsContent = state.docsContent.concat([{
        file: action.file, content: marked(action.content)
      }]);
      return {...state, docsContent};
    }
    default: {
      return state;
    }
  }
}
