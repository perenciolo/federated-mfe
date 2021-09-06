import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';

import App from './App';
import { Mount } from '../types/bootstrap.d';

export const mount = function (el: Element, { onNavigate, defaultHistory }) {
  const history = defaultHistory || createMemoryHistory();

  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDOM.render(<App history={history} />, el);

  return {
    onParentNavigate({ pathname: nexPathName }) {
      const { pathname } = history.location;
      if (pathname !== nexPathName) {
        history.push(nexPathName);
      }
    },
  };
} as Mount;

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root');

  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}
