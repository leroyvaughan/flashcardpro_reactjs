import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers';
import App from './components/App';
import Stack from'./components/card-stacks/Stack';
import StackForm from './components/card-stacks/StackForm';
// import { setStack } from './store/actions';

import * as serviceWorker from './serviceWorker';


const store = createStore(rootReducer);
store.subscribe(() => console.log("store:\t", store.getState()));
// store.dispatch(setStack({ id: 0, title: 'example', cards: [] }));



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>

      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={App} />
          <Route path='/stack' component={Stack} />
          <Route path='/stack_form' component={StackForm} />
        </Switch>
      </BrowserRouter>

    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
