import React from 'react';
import { shallow } from 'enzyme';
import { StackList } from '../components/card-stacks/StackList';
import { stacks } from '../data/fixtures';


describe("Stacklist tests", () => {
  const props = { stacks };
  const stackList = shallow(<StackList {...props} />);

  it('renders correct number of card links', () => {
    expect(stackList.find('Link').length).toEqual(props.stacks.length);
  });

});

