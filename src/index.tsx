import * as React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './core/App';
import rootReducer from './core/redux/rootReducer';

const store = createStore(rootReducer);

const rootEl = document.getElementById('root');

render(
  <Provider store={store}>
    <AppContainer>
      <App/>
    </AppContainer>
  </Provider>,
  rootEl,
);

// Hot Module Replacement API
declare let module: { hot: any };

if (module.hot) {
  module.hot.accept('./core/App', () => {
    const NewApp = require('./core/App').default;
    render(
      <Provider store={store}>
        <AppContainer>
          <NewApp/>
        </AppContainer>
      </Provider>,
      rootEl,
    );
  });
}
