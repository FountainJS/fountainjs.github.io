// import _ from 'lodash';
import path from 'path';
import fs from 'fs';
import React from 'react';
import {Provider} from 'react-redux';
import {renderToString} from 'react-dom/server';
import {RouterContext, match} from 'react-router';

import configureStore from '../src/app/redux';
// import renderFullPage from './render-full-page.js';
import routes from '../src/routes';

// // Wait for the actions that the components loaded needs
// function fetchComponentData(dispatch, components, params) {
//   const needs = components.reduce((prev, current) => {
//     return _.isArray(current.needs) ? current.needs.concat(prev) : prev;
//   }, []);
//
//   const promises = needs.map(need => dispatch(need(params)));
//
//   return Promise.all(promises);
// }
//
// export function handleRender(req, res) {
//   // Create a new Redux store instance
//   const store = configureStore();
//
//   match({routes, location: req.url}, (error, redirectLocation, renderProps) => {
//     if (error) {
//       return res.status(500).send(error.message);
//     }
//     if (redirectLocation) {
//       return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
//     }
//     if (_.isUndefined(renderProps) || renderProps === null) {
//       // return next('err msg: route not found'); // yield control to next middleware to handle the request
//       return res.status(404).send('Not found');
//     }
//
//     fetchComponentData(store.dispatch, renderProps.components, renderProps.params)
//       .then(() => {
//         // Render the component to a string
//         const html = renderToString(
//           <Provider store={store}>
//             <RouterContext {...renderProps}/>
//           </Provider>
//         );
//
//         // Grab the initial state from our Redux store
//         const initialState = store.getState();
//
//         // Send the rendered page back to the client
//         res.send(renderFullPage(html, initialState));
//       });
//   });
// }

export default function render(location) {
  const indexHtml = fs.readFileSync(path.join(__dirname, '../dist/index.html')).toString();

  return new Promise(resolve => {
    match({routes, location}, (error, redirectLocation, renderProps) => {
      const store = configureStore();

      const html = renderToString(
        <Provider store={store}>
          <RouterContext {...renderProps}/>
        </Provider>
      );

      // Grab the initial state from our Redux store
      const initialState = store.getState();

      // Send the rendered page back to the client
      resolve(renderFullPage(indexHtml, html, initialState));
    });
  });
}

function renderFullPage(indexHtml, html, initialState) {
  const content = indexHtml.replace(/<div id="root"><\/div>/, `
    <div id="root">${html}</div>
    <script>
      window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
    </script>
  `);
  return content;
}
