import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

// purpose of mount function is to decouple technologies 
// between container and remote apps
const mount = (el) => {
  ReactDOM.render(<App />, el);
}

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector("#_marketing-dev-root");
  if (devRoot) {
    mount(devRoot);
  }
}

export { mount }