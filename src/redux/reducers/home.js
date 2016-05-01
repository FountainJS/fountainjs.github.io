import {RECEIVE_OPTIONS, SELECT_OPTION} from '../actions/home';

const initialState = {
  options: [],
  selection: []
};

export default function home(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_OPTIONS: {
      return {...state, options: action.options};
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
