import _ from 'lodash';

export const REQUEST_GULP_ANGULAR = 'REQUEST_GULP_ANGULAR';
function requestGulpAngular() {
  return {type: REQUEST_GULP_ANGULAR};
}

export const RECEIVE_GULP_ANGULAR = 'RECEIVE_GULP_ANGULAR';
function receiveGulpAngular(docs) {
  return {type: RECEIVE_GULP_ANGULAR, docs};
}

export function fetchGulpAngular() {
  return (dispatch, getState) => {
    const gulpAngular = getState().gulpAngular;
    if (!_.isEmpty(gulpAngular.docs) || gulpAngular.loading) {
      return;
    }
    dispatch(requestGulpAngular());
    return fetch('/data/gulp-angular.json')
      .then(response => response.json())
      .then(content => dispatch(receiveGulpAngular(content)))
      .catch(console.error);
  };
}

export const REQUEST_GULP_ANGULAR_CONTENT = 'REQUEST_DOC_CONTENT';
function requestGulpAngularContent() {
  return {type: REQUEST_GULP_ANGULAR_CONTENT};
}

export const RECEIVE_GULP_ANGULAR_CONTENT = 'RECEIVE_GULP_ANGULAR_CONTENT';
function receiveGulpAngularContent(file, content) {
  return {type: RECEIVE_GULP_ANGULAR_CONTENT, file, content};
}

export function fetchGulpAngularContent(file) {
  return (dispatch, getState) => {
    const gulpAngular = getState().gulpAngular;
    const content = _.find(gulpAngular.docsContent, {file});
    if (!_.isString(file) || _.isObject(content) || gulpAngular.loadingDocs) {
      return;
    }
    dispatch(requestGulpAngularContent());
    return fetch(`/data/gulp-angular/${file}`)
      .then(response => response.text())
      .then(content => dispatch(receiveGulpAngularContent(file, content)))
      .catch(console.error);
  };
}
