import {REQUEST_DOCS, RECEIVE_DOCS, REQUEST_DOC_CONTENT, RECEIVE_DOC_CONTENT} from '../actions/doc';
import marked from 'marked';

const initialState = {
  docs: [],
  docsContent: [],
  loading: false,
  loadingDoc: false
};

export default function doc(state = initialState, action) {
  switch (action.type) {
    case REQUEST_DOCS: {
      return {...state, loading: true};
    }
    case RECEIVE_DOCS: {
      return {...state, docs: action.docs, loading: false};
    }
    case REQUEST_DOC_CONTENT: {
      return {...state, loadingDoc: true};
    }
    case RECEIVE_DOC_CONTENT: {
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
