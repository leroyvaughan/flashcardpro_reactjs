import React from 'react';
import { shallow } from 'enzyme';
import { StackForm } from '../components/card-stacks/StackForm';


describe("StackForm tests", () => {
  const stackForm = shallow(<StackForm />);
  const changeTitle = "change title";
  const changePrompt = "change prompt";
  const changeAnswer = "change answer";

  it('renders Header component', () => {
    expect(stackForm.find("Header")).toHaveLength(1);
  });

  it('renders a Form component', () => {
    expect(stackForm.find("Form")).toHaveLength(1);
  });

  it('renders a button to add a card', () => {
    expect(stackForm.find("Button").at(0).props().children).toEqual('Add Card');
  });

  it('renders a button to submit the stack', () => {
    expect(stackForm.find("Button").at(1).props().children).toEqual('Save and Add the Stack');
  });

  //TITLE
  describe('and updating the title', () => {
    beforeEach(() => {
      stackForm.find('FormControl').simulate('change', { target: { value: changeTitle } })
    });

    it('updates the title in state', () => {
      // console.log(stackForm.state());
      expect(stackForm.state().title).toEqual(changeTitle);
    })
  });


  //ADDING A NEW CARD
  describe('Adding a new card', () => {
    beforeEach(() => {
      stackForm.find('Button').at(0).simulate('click');
    });

    afterEach(() => {
      stackForm.setState({ cards: [] });
    });


    it('adds a new card', () => {
      expect(stackForm.state().cards.length).toEqual(1);
    });

    it('and renders the prompt section', () => {
      expect(stackForm.find('FormLabel').at(1).props().children).toEqual('Prompt:\u00a0');
    });

    it('and renders the answer section', () => {
      expect(stackForm.find('FormLabel').at(2).props().children).toEqual('Answer:\u00a0');
    });


    //UPDATING CARD PROMPT
    describe('--> updating the card prompt', () => {
      beforeEach(() => {
        stackForm.find('FormControl').at(1)
          .simulate('change', { target: { value: changePrompt }});
      });

      it('updated the prompt in state', () => {
        expect(stackForm.state().cards[0].prompt)
          .toEqual(changePrompt);
      });
    });


    //UPDATING THE CARD ANSWER
    describe('--> updating the card answer', () => {
      beforeEach(() => {
        stackForm.find('FormControl').at(2)
          .simulate('change', { target: { value: changeAnswer }});
      });

      it('updated the answer in state', () => {
        expect(stackForm.state().cards[0].answer)
          .toEqual(changeAnswer);
      });
    });
  });


  // describe("adding a new stack", () => {
  //   beforeEach(() => {
  //     stackForm.find("#addstack-btn").simulate('click');
  //   });




  // });



});


