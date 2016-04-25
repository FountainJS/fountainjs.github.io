import {REQUEST_TECHS, RECEIVE_TECHS} from '../actions/actions';

export default function techs(state = [], action) {
  switch (action.type) {
    case RECEIVE_TECHS:
      return action.techs;
    case REQUEST_TECHS:
    default:
      return state;
  }
}
