import _ from 'lodash';

export const REQUEST_STEPS = 'REQUEST_STEPS';
function requestSteps() {
  return {type: REQUEST_STEPS};
}

export const RECEIVE_STEPS = 'RECEIVE_STEPS';
function receiveSteps(steps) {
  return {type: RECEIVE_STEPS, steps};
}

export function fetchSteps() {
  return (dispatch, getState) => {
    const codelab = getState().codelab;
    if (!_.isEmpty(codelab.steps) || codelab.loading) {
      return;
    }
    dispatch(requestSteps());
    return fetch('/data/codelab.json')
      .then(response => response.json())
      .then(content => dispatch(receiveSteps(content)))
      .catch(console.error);
  };
}

export const REQUEST_STEP_CONTENT = 'REQUEST_STEP_CONTENT';
function requestdStepContent() {
  return {type: REQUEST_STEP_CONTENT};
}

export const RECEIVE_STEP_CONTENT = 'RECEIVE_STEP_CONTENT';
function receivedStepContent(file, content) {
  return {type: RECEIVE_STEP_CONTENT, file, content};
}

export function fetchStepContent(file) {
  return (dispatch, getState) => {
    const codelab = getState().codelab;
    const content = _.find(codelab.stepsContent, {file});
    if (!_.isString(file) || _.isObject(content) || codelab.loadingSteps) {
      return;
    }
    dispatch(requestdStepContent());
    return fetch(`/data/codelab/${file}`)
      .then(response => response.text())
      .then(content => dispatch(receivedStepContent(file, content)))
      .catch(console.error);
  };
}
