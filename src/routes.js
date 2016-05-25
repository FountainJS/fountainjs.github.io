import React from 'react';
import {Route, IndexRoute} from 'react-router';

import Main from './components/main';
import Home from './redux/containers/home';
import Doc from './redux/containers/doc';
import DocContent from './redux/containers/doc-content';
import GulpAngular from './redux/containers/gulp-angular';
import GulpAngularContent from './redux/containers/gulp-angular-content';
import Blog from './components/blog/blog';
import Summaries from './redux/containers/summaries';
import Post from './redux/containers/post';
import Codelab from './redux/containers/codelab';
import Step from './redux/containers/step';

export default (
  <Route component={Main}>
    <Route path="/" component={Home}/>
    <Route path="/doc" component={Doc}>
      <IndexRoute component={DocContent}/>
      <Route path=":doc" component={DocContent}/>
    </Route>
    <Route path="/codelab" component={Codelab}>
      <IndexRoute component={Step}/>
      <Route path=":step" component={Step}/>
    </Route>
    <Route path="/gulp-angular" component={GulpAngular}>
      <IndexRoute component={GulpAngularContent}/>
      <Route path=":doc" component={GulpAngularContent}/>
    </Route>
    <Route path="/blog" component={Blog}>
      <IndexRoute component={Summaries}/>
      <Route path=":post" component={Post}/>
    </Route>
  </Route>
);
