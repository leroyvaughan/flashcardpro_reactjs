import React, { Component } from 'react';
import Header from './parts/header';
import { Link } from 'react-router-dom';
import StackList from './card-stacks/StackList';

class App extends Component {
  render() {
    return (
      <div className="app">
        {/* <header className="app-header"> */}
          {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
        {/* </header> */}

        <Header showHome={false} title='' />

        <StackList />

        <Link
          id="stack-form-link"
          to="stack_form"
          className='btn btn-outline-secondary'
        >
          <h4>Create a New Stack</h4>
        </Link>

      </div>
    );
  }
}

export default App;
