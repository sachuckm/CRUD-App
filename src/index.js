/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';


import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
*/
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers from './reducers';
import App from './containers/App';


//create the redux store
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)

);

ReactDOM.render(
  <Provider store={store}>
    <App />	
  </Provider>, document.getElementById('root')
);
