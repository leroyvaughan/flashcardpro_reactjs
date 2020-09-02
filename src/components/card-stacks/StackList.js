import React, { Component } from 'react';
import { connect } from 'react-redux';
import stacks from '../../data/stacks.json';
import { Link } from 'react-router-dom';
import { loadStacks } from '../../store/actions';

class StackList extends Component {
  componentDidMount() {
    if(this.props.stacks.length === 0){
      this.props.loadStacks(stacks);
    }
  }

  render() {
    return (
      <div className="stacklist">
        {
          this.props.stacks.map(stack => {
            return (
              <Link
                to={{
                  pathname: '/stack',
                  stack: stack
                }}
                key={stack.id}
                >
                <h4>{stack.title}</h4>
              </Link>
            )
          })
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { stacks: state.stacks };
}

// Passing an object full of actions will automatically run each action
// through the bindActionCreators utility, and turn them into props
export default connect(mapStateToProps, { loadStacks })(StackList);