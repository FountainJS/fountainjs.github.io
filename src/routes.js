import React from 'react';
import {Route, IndexRoute} from 'react-router';

import Main from './app/components/main';
import Home from './app/redux/containers/home';
import Doc from './app/redux/containers/doc';
import DocContent from './app/redux/containers/doc-content';

export default (
  <Route component={Main}>
    <Route path="/" component={Home}/>
    <Route path="/doc" component={Doc}>
      <IndexRoute component={DocContent}/>
      <Route path=":doc" component={DocContent}/>
    </Route>
  </Route>
);
