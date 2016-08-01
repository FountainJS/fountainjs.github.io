import {REQUEST_RELEASES, RECEIVE_RELEASES} from '../actions/releases';

const initialState = {
  releases: [],
  loading: false
};

export default function home(state = initialState, action) {
  switch (action.type) {
    case REQUEST_RELEASES: {
      return {...state, loading: true};
    }
    case RECEIVE_RELEASES: {
      return {...state, releases: action.releases, loading: false};
    }
    default: {
      return state;
    }
  }
}
