import {REQUEST_STEPS, RECEIVE_STEPS, REQUEST_STEP_CONTENT, RECEIVE_STEP_CONTENT} from '../actions/codelab';
import marked from '../../marked';

const initialState = {
  steps: [],
  stepsContent: [],
  loading: false,
  loadingStep: false
};

export default function codelab(state = initialState, action) {
  switch (action.type) {
    case REQUEST_STEPS: {
      return {...state, loading: true};
    }
    case RECEIVE_STEPS: {
      return {...state, steps: action.steps, loading: false};
    }
    case REQUEST_STEP_CONTENT: {
      return {...state, loadingStep: true};
    }
    case RECEIVE_STEP_CONTENT: {
      const stepsContent = state.stepsContent.concat([{
        file: action.file, content: marked(action.content)
      }]);
      return {...state, stepsContent, loadingStep: false};
    }
    default: {
      return state;
    }
  }
}
