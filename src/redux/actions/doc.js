export const RECEIVE_DOCS = 'RECEIVE_DOCS';
function receiveDocs(docs) {
  return {type: RECEIVE_DOCS, docs};
}

export function fetchDocs() {
  return dispatch => {
    return fetch('/data/docs.json')
      .then(response => response.json())
      .then(content => dispatch(receiveDocs(content)))
      .catch(console.error);
  };
}

export const RECEIVE_DOC_CONTENT = 'RECEIVE_DOC_CONTENT';
function receiveDocContent(file, content) {
  return {type: RECEIVE_DOC_CONTENT, file, content};
}

export function fetchDocContent(file) {
  return dispatch => {
    return fetch(`/data/doc/${file}`)
      .then(response => response.text())
      .then(content => dispatch(receiveDocContent(file, content)))
      .catch(console.error);
  };
}
