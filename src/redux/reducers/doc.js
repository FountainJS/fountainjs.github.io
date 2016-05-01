import {RECEIVE_DOCS, RECEIVE_DOC_CONTENT} from '../actions/doc';
import marked from 'marked';

const initialState = {
  docs: [],
  docsContent: []
};

export default function home(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_DOCS: {
      return {...state, docs: action.docs};
    }
    case RECEIVE_DOC_CONTENT: {
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
