import {REQUEST_OPTIONS, RECEIVE_OPTIONS, SELECT_OPTION} from '../actions/home';

const initialState = {
  options: [],
  selection: [],
  loading: false
};

export default function home(state = initialState, action) {
  switch (action.type) {
    case REQUEST_OPTIONS: {
      return {...state, loading: true};
    }
    case RECEIVE_OPTIONS: {
      return {...state, options: action.options, loading: false};
    }
    case SELECT_OPTION: {
      const selection = state.selection.map(x => x);
      selection[action.option] = action.value;
      return {...state, selection};
    }
    default: {
      return state;
    }
  }
}
