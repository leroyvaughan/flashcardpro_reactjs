import React from 'react';
import { shallow } from 'enzyme';
import { Stack } from '../components/card-stacks/Stack';import { stack } from '../data/fixtures';


const props = { location: { ...stack }};

describe('Stack Test', ()=> {
  const stack = shallow(<Stack {...props} />);

  it('renders Header component', () => {
    expect(stack.find("Header")).toHaveLength(1);
  });

  it('render correct number of cards', () => {
    expect(stack.find('Card').length).toEqual(props.location.stack.cards.length);
  });
});