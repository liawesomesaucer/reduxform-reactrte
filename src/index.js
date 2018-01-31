import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { Provider } from 'react-redux';

import RichTextFieldArrayComponent from './RichTextFieldArrayComponent';

const rootReducer = combineReducers({
  form: formReducer,
});

const store = createStore(rootReducer);

const App = () => (
  <div>
    <h2>Redux Form + React Rich Text Editor Example{'\u2728'}</h2>
    <Provider store={store}>
      <RichTextFieldArrayComponent name="CodeSandbox" />
    </Provider>
  </div>
);

render(<App />, document.getElementById('root'));
