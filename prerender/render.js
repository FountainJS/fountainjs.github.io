import _ from 'lodash';
import path from 'path';
import fs from 'fs';
import React from 'react';
import {Provider} from 'react-redux';
import {renderToString} from 'react-dom/server';
import {RouterContext, match} from 'react-router';

import configureStore from '../src/redux';
import routes from '../src/routes';

// Fetch "home made" mock
global.fetch = url => {
  return new Promise(resolve => {
    const filePath = path.join(__dirname, '../dist', url);
    fs.readFile(filePath, (error, content) => {
      if (error) {
        console.error(error);
      }
      const result = {
        text: () => content.toString(),
        json: () => JSON.parse(content.toString())
      };
      resolve(result);
    });
  });
};

// Wait for the actions that the components loaded needs
function fetchComponentData(dispatch, components, params) {
  const needs = components.reduce((prev, current) => {
    let result = prev;
    if (_.isArray(current.needs)) {
      if (_.isString(current.index)) {
        const index = require(path.join('../src', current.index));
        const doc = _.find(index, {path: params.doc || ''});
        result = current.needs.map(need => () => need(doc.file)).concat(prev);
      } else {
        result = current.needs.concat(prev);
      }
    }
    return result;
  }, []);

  const promises = needs.map(need => dispatch(need(params)));

  return Promise.all(promises);
}

export default function render(location) {
  const indexHtml = fs.readFileSync(path.join(__dirname, '../dist/index.html')).toString();

  return new Promise(resolve => {
    match({routes, location}, (error, redirectLocation, renderProps) => {
      const store = configureStore();

      fetchComponentData(store.dispatch, renderProps.components, renderProps.params)
        .then(() => {
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
