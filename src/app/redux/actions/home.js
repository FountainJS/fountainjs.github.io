export const RECEIVE_OPTIONS = 'RECEIVE_OPTIONS';
function receiveOption(options) {
  return {type: RECEIVE_OPTIONS, options};
}

export function fetchOptions() {
  return dispatch => {
    return fetch('data/options.json')
      .then(response => response.json())
      .then(content => dispatch(receiveOption(content)));
  };
}

export const SELECT_OPTION = 'SELECT_OPTION';
export function selectOption(option, value) {
  return {type: SELECT_OPTION, option, value};
}
