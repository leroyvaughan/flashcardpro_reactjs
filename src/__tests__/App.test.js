import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import App from '../components/App';

describe('App', () => {
  const app = shallow(<App />, { wrapper: MemoryRouter });

  it('renders Header component', () => {
    expect(app.find("Header")).toHaveLength(1);
  });

  it('renders Stacklist component', () => {
    expect(app.find("Connect(StackList)")).toHaveLength(1);
  })

  it('renders Link to StackForm', ()=> {
    expect(app.find("Link h4").text()).toEqual('Create a New Stack');
  });





});
