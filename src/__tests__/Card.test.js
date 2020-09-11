import React from 'react';
import { shallow } from 'enzyme';
import Card from '../components/card-stacks/Card';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

const prompt = 'test prompt';
const answer = 'test answer';
const props = {
  card: { prompt: prompt, answer: answer }
};

describe("Card Tests", () => {
  const card = shallow(<Card {...props} />);

  it('sets `reveal` to be `false`', () => {
    expect(card.state().reveal).toBe(false);
  });

  it('renders the card prompt', () => {
    expect(card.find('.prompt h4').text()).toEqual(prompt);
  });

  it('renders the card answer', () => {
    expect(card.find('.answer h4').text()).toEqual(answer);
  });

  it('`text-hidden` class applied to card answer', () => {
    expect(card.find('.answer h4').hasClass('text-hidden')).toBe(true);
  });

  describe('card click reveals answer', () => {
    beforeEach(() => card.simulate('click'));

    it('updates `reveal` to be `true`', () => {
      expect(card.state().reveal).toBe(true);
    });

    it('`text-revealed` class has been applied', () => {
      expect(card.find('.answer h4').hasClass('text-revealed')).toBe(true);
    });
  });
});

