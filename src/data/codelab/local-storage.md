---
layout: codelab
title: 'Step 7: Make Todos persistent with local storage'
markdown: 1
---

Let’s revisit the issue of items not persisting when the browser refreshes with our React/Redux *mytodo* app.

## Install npm package

To easily achieve this we can use another Redux module called "[redux-persist](https://github.com/rt2zz/redux-persist)" that will allow us to quickly implement [local storage](http://diveintohtml5.info/storage.html).

Run the following command:

```sh
npm install --save redux-persist
```

![](/assets/img/codelab/image_29.png)

## Use redux-persist

Edit the Todo reducer (`src/app/reducers/todos.js`) to include the new case with action `REHYDRATE`:

```js
import {ADD_TODO, DELETE_TODO, EDIT_TODO, COMPLETE_TODO, COMPLETE_ALL, CLEAR_COMPLETED} from '../constants/ActionTypes';
import {REHYDRATE} from 'redux-persist/constants';

...
...
...

case REHYDRATE: {
  const incoming = action.payload.todos;
  if (incoming.length > 0) {
    return incoming;
  }
  return state;
}
```

The Redux store should be configured (`src/app/store/configureStore.js`) to use persistence:

```js
import {createStore} from 'redux';
import {persistStore, autoRehydrate} from 'redux-persist';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, autoRehydrate());
  persistStore(store);
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
```

If you look at your app in the browser now you’ll see that there are one item "Use Yeoman" in the todo list. The app is initialising the todos store if local storage is empty and we haven’t given it any todo items yet.

![](/assets/img/codelab/image_30.png)

Go ahead and add a few items to the list:

![](/assets/img/codelab/image_31.png)

Now when we refresh our browser the items persist. Hooray!

We can confirm whether our data is being persisted to local storage by checking the **Resources** panel in Chrome DevTools and selecting **Local Storage** from the lefthand side:

![](/assets/img/codelab/image_32.png)

<div class="note tip">

  <h2>Write unit tests</h2>

  <p>For an extra challenge, revisit unit testing in <a href="write-unit-tests.html">Step 6</a> and consider how you might update your tests now that the code is using local storage.</p>

</div>

<p class="codelab-paging">
  <a href="index.html#toc">&laquo; Return to overview</a>
  or
  <a href="prepare-production.html">Go to the next step &raquo;</a>
</p>
