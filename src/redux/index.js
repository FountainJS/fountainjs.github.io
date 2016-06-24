import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

export default function configureStore() {
  const isBrowser = typeof window !== 'undefined';
  const initialState = isBrowser ? window.__INITIAL_STATE__ : undefined;

  return createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(thunk),
      isBrowser && window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
}
