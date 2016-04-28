/* eslint no-else-return: 0 */

import path from 'path';
import _ from 'lodash';
import routes from '../src/routes';

const matchArg = /:[^\/]*/;

export default function listPaths() {
  function mapPaths(route, context) {
    const current = context + (route.props.path ? route.props.path : '');
    if (_.isArray(route.props.children)) {
      return route.props.children.map(child => {
        return mapPaths(child, current);
      });
    } else {
      if (matchArg.test(route.props.path)) {
        const confPath = path.join(__dirname, '../src', route.props.component.index);
        const conf = require(confPath);
        return conf
          .map(description => description.path)
          .filter(path => path)
          .map(path => current.replace(matchArg, path));
      }
      return current;
    }
  }

  return _.flatten(mapPaths(routes, ''));
}
