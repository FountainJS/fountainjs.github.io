export const REQUEST_TECHS = 'REQUEST_TECHS';
function requestTechs() {
  return {
    type: REQUEST_TECHS
  };
}

export const RECEIVE_TECHS = 'RECEIVE_TECHS';
function receiveTechs(json) {
  return {
    type: RECEIVE_TECHS,
    techs: json,
    receivedAt: Date.now()
  };
}

export function fetchTechs() {
  return dispatch => {
    dispatch(requestTechs());
    return fetch('app/components/techs/techs.json')
      .then(response => response.json())
      .then(json => dispatch(receiveTechs(json)));
  };
}
