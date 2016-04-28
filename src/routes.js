import React from 'react';
import {Route} from 'react-router';

import Main from './app/components/main';
import Home from './app/redux/containers/home';
import Doc from './app/components/doc/doc';

export default (
  <Route component={Main}>
    <Route path="/" component={Home}/>
    <Route path="/doc" component={Doc}/>
    <Route path="/doc/:doc" component={Doc}/>
  </Route>
);
