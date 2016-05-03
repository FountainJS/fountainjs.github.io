export const RECEIVE_POSTS = 'RECEIVE_POSTS';
function receivePosts(posts) {
  return {type: RECEIVE_POSTS, posts};
}

export function fetchPosts() {
  return dispatch => {
    return fetch('/data/posts.json')
      .then(response => response.json())
      .then(content => dispatch(receivePosts(content)))
      .catch(console.error);
  };
}

export const RECEIVE_POST_CONTENT = 'RECEIVE_POST_CONTENT';
function receivePostContent(file, content) {
  return {type: RECEIVE_POST_CONTENT, file, content};
}

export function fetchPostContent(file) {
  return dispatch => {
    return fetch(`/data/posts/${file}`)
      .then(response => response.text())
      .then(content => dispatch(receivePostContent(file, content)))
      .catch(console.error);
  };
}
