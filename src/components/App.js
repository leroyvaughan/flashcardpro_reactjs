import React, { Component } from 'react';
import Header from './parts/header';
import { Link } from 'react-router-dom';
import StackList from './card-stacks/StackList';

class App extends Component {
  render() {
    return (
      <div className="app">

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
