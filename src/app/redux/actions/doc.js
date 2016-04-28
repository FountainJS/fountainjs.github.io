export const RECEIVE_DOCS = 'RECEIVE_DOCS';
function receiveDocs(docs) {
  return {type: RECEIVE_DOCS, docs};
}

export function fetchDocs() {
  return dispatch => {
    return fetch('data/docs.json')
      .then(response => response.json())
      .then(content => dispatch(receiveDocs(content)));
  };
}
