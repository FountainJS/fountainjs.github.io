import React from 'react';
import {Route, IndexRoute} from 'react-router';

import Main from './components/main';
import Home from './redux/containers/home';
import Doc from './redux/containers/doc';
import DocContent from './redux/containers/doc-content';

export default (
  <Route component={Main}>
    <Route path="/" component={Home}/>
    <Route path="/doc" component={Doc}>
      <IndexRoute component={DocContent}/>
      <Route path=":doc" component={DocContent}/>
    </Route>
  </Route>
);
