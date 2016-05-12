export const RECEIVE_GULP_ANGULAR = 'RECEIVE_GULP_ANGULAR';
function receiveGulpAngular(docs) {
  return {type: RECEIVE_GULP_ANGULAR, docs};
}

export function fetchGulpAngular() {
  return dispatch => {
    return fetch('/data/gulp-angular.json')
      .then(response => response.json())
      .then(content => dispatch(receiveGulpAngular(content)))
      .catch(console.error);
  };
}

export const RECEIVE_GULP_ANGULAR_CONTENT = 'RECEIVE_GULP_ANGULAR_CONTENT';
function receiveGulpAngularContent(file, content) {
  return {type: RECEIVE_GULP_ANGULAR_CONTENT, file, content};
}

export function fetchGulpAngularContent(file) {
  return dispatch => {
    console.log('fetchGulpAngularContent', file);
    return fetch(`/data/gulp-angular/${file}`)
      .then(response => response.text())
      .then(content => dispatch(receiveGulpAngularContent(file, content)))
      .catch(console.error);
  };
}
