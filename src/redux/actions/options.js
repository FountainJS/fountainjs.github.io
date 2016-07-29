import _ from 'lodash';

export const REQUEST_OPTIONS = 'REQUEST_OPTIONS';
function requestOption() {
  return {type: REQUEST_OPTIONS};
}

export const RECEIVE_OPTIONS = 'RECEIVE_OPTIONS';
function receiveOption(options) {
  return {type: RECEIVE_OPTIONS, options};
}

export function fetchOptions() {
  return (dispatch, getState) => {
    const options = getState().options;
    if (!_.isEmpty(options.options) || options.loading) {
      return;
    }
    dispatch(requestOption());
    return fetch('/data/options.json')
      .then(response => response.json())
      .then(content => dispatch(receiveOption(content)))
      .catch(console.error);
  };
}

export const SELECT_OPTION = 'SELECT_OPTION';
export function selectOption(option, value) {
  return {type: SELECT_OPTION, option, value};
}
