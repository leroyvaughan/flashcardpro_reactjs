import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../parts/header';
import { Form, FormGroup, FormControl, FormLabel, Button }
 from 'react-bootstrap';
import { addStack } from '../../store/actions';

class StackForm extends Component {
  constructor() {
    super(); //add state

    this.state = {
      title: '',
      cards: []
    }
  }

  addStack() {
    this.props.addStack(this.state);
  }

  addCard() {
    //get local copy of cards
    const { cards } = this.state;
    cards.push({ id: cards.length, prompt: '', answer: ''});
    this.setState({ cards });
  }

  updateCardPart(event, index, part) {
    const { cards } = this.state;
    cards[index][part] = event.target.value;
    this.setState({ cards });
  }

  render() {

    return (
      <div className="app">
        <Header showHome={true} title="Create a New Stack" />

        <Form inline>
          <FormGroup id="form-hdr" className="form-edges">
            <FormLabel>Stack Title:&nbsp;</FormLabel>
            <FormControl onChange={event => this.setState({ title: event.target.value })} />
          </FormGroup>

          {
            this.state.cards.map((card, index) => {
              return (
                <div key={card.id} className="card">
                  <FormGroup>
                    <FormLabel>Prompt:&nbsp;</FormLabel>
                    <FormControl
                      onChange={event => {
                        this.updateCardPart(event, index, "prompt");
                      }} />

                    <FormLabel>Answer&nbsp;</FormLabel>
                    <FormControl
                      onChange={event => {
                        this.updateCardPart(event, index, "answer");
                      }} />
                  </FormGroup>
                </div>
              )
            })
          }

          <FormGroup id="form-ftr" className="form-edges">
            <Button onClick={() => this.addCard()}>Add Card</Button>

            <Button onClick={() => this.addStack()}>
              Save and Add the Stack
            </Button>
          </FormGroup>
        </Form>
      </div>
    )
  }
}


export default connect(null, { addStack })(StackForm);




/*

  TODO:
    - redesign form
    - use sub component for addcard? && addStack??
      -> don't like onChange event...



*/