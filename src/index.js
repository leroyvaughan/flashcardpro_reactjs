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


const store = createStore(rootReducer);
// store.subscribe(() => console.log("store:\t", store.getState()));
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
  document.getElementById('root') || document.createElement('div') // for testing purposes
);

