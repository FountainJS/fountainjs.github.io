import _ from 'lodash';

export const REQUEST_RELEASES = 'REQUEST_RELEASES';
function requestReleases() {
  return {type: REQUEST_RELEASES};
}

export const RECEIVE_RELEASES = 'RECEIVE_RELEASES';
function receiveReleases(releases) {
  return {type: RECEIVE_RELEASES, releases};
}

export function fetchReleases() {
  return (dispatch, getState) => {
    const releases = getState().releases;
    if (!_.isEmpty(releases.releases) || releases.loading) {
      return;
    }
    dispatch(requestReleases());
    return fetch('https://api.github.com/repos/FountainJS/fountain/releases/latest')
      .then(response => response.json())
      .then(content => dispatch(receiveReleases(content.assets)))
      .catch(console.error);
  };
}
