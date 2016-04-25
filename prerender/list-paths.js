/* eslint no-else-return: 0 */

import _ from 'lodash';
import routes from '../src/routes';

export default function listPaths() {
  function mapPaths(route, context) {
    const current = context + (route.props.path ? route.props.path : '');
    if (_.isArray(route.props.children)) {
      return route.props.children.map(child => {
        return mapPaths(child, current);
      });
    } else {
      return current;
    }
  }

  return _.flatten(mapPaths(routes, ''));
}
