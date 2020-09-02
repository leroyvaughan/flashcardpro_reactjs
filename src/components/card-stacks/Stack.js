import React, { Component } from 'react';
import Header from '../parts/header';
import Card from './Card';

/*** NOTE:
 *    had to modify this component to not use store
 *     - state loss issue when styling and page refreshed
 */

class Stack extends Component {
  constructor() {
    super();

    this.state = {
      cards: [],
      title: "No Data!"
    };
  }

  componentDidMount() {
    // console.log("stack props:\t", this.props);
    let curStack;

    if(this.props.location.stack) {
      curStack = this.props.location.stack;

      window.localStorage.setItem(
        "currentStack",
        JSON.stringify(curStack)
      );
    }
    else {  //for page refresh
      curStack = JSON.parse(
        window.localStorage.getItem("currentStack")
      );
    }

    this.setState({
      cards: curStack.cards,
      title: curStack.title
    });

  }

  render() {
    const { title, cards } = this.state;

    return (
      <div className="app">
        <Header showHome={true} title={title} />

        {
          cards.map(card => {
            return (
              <Card key={card.id} card={card} />
            )
          })
        }
      </div>
    )
  }
}

export default Stack;