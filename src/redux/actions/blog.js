import _ from 'lodash';

export const REQUEST_POSTS = 'REQUEST_POSTS';
function requestPosts() {
  return {type: REQUEST_POSTS};
}

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
function receivePosts(posts) {
  return {type: RECEIVE_POSTS, posts};
}

export function fetchPosts() {
  return (dispatch, getState) => {
    const blog = getState().blog;
    if (!_.isEmpty(blog.posts) || blog.loading) {
      return;
    }
    dispatch(requestPosts());
    return fetch('/data/posts.json')
      .then(response => response.json())
      .then(content => dispatch(receivePosts(content)))
      .catch(console.error);
  };
}

export const REQUEST_POST_CONTENT = 'REQUEST_POST_CONTENT';
function requestPostContent() {
  return {type: REQUEST_POST_CONTENT};
}

export const RECEIVE_POST_CONTENT = 'RECEIVE_POST_CONTENT';
function receivePostContent(file, content) {
  return {type: RECEIVE_POST_CONTENT, file, content};
}

export function fetchPostContent(file) {
  return (dispatch, getState) => {
    const blog = getState().blog;
    const content = _.find(blog.postsContent, {file});
    if (!_.isString(file) || _.isObject(content) || blog.loadingPosts) {
      return;
    }
    dispatch(requestPostContent());
    return fetch(`/data/posts/${file}`)
      .then(response => response.text())
      .then(content => dispatch(receivePostContent(file, content)))
      .catch(console.error);
  };
}
