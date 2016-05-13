import _ from 'lodash';

export const REQUEST_DOCS = 'REQUEST_DOCS';
function requestDocs() {
  return {type: REQUEST_DOCS};
}

export const RECEIVE_DOCS = 'RECEIVE_DOCS';
function receiveDocs(docs) {
  return {type: RECEIVE_DOCS, docs};
}

export function fetchDocs() {
  return (dispatch, getState) => {
    const doc = getState().doc;
    if (!_.isEmpty(doc.docs) || doc.loading) {
      return;
    }
    dispatch(requestDocs());
    return fetch('/data/docs.json')
      .then(response => response.json())
      .then(content => dispatch(receiveDocs(content)))
      .catch(console.error);
  };
}

export const REQUEST_DOC_CONTENT = 'REQUEST_DOC_CONTENT';
function requestDocContent() {
  return {type: REQUEST_DOC_CONTENT};
}

export const RECEIVE_DOC_CONTENT = 'RECEIVE_DOC_CONTENT';
function receiveDocContent(file, content) {
  return {type: RECEIVE_DOC_CONTENT, file, content};
}

export function fetchDocContent(file) {
  return (dispatch, getState) => {
    const doc = getState().doc;
    const content = _.find(doc.docsContent, {file});
    if (!_.isString(file) || _.isObject(content) || doc.loadingDocs) {
      return;
    }
    dispatch(requestDocContent());
    return fetch(`/data/docs/${file}`)
      .then(response => response.text())
      .then(content => dispatch(receiveDocContent(file, content)))
      .catch(console.error);
  };
}
